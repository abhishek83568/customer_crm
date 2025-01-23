const { Customer } = require("../models");
const { Sequelize } = require("sequelize");
const { z } = require("zod");

const createCustomerSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().nonempty("Phone is required"),
  company: z.string().optional(),
});

const updateCustomerSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Invalid email address").optional(),
  phone: z.string().optional(),
  company: z.string().optional(),
});

const createCustomer = async (req, res) => {
  const result = createCustomerSchema.safeParse(req.body);

  if (!result.success) {
    const errors = result.error.issues.map((issue) => issue.message);
    return res.status(400).json({ error: errors.join(", ") });
  }

  if (!req.user || !req.user.id) {
    return res.status(400).json({ error: "User ID is missing" });
  }

  try {
    const customer = await Customer.create({
      ...result.data,
      user_id: req.user.id,
    });
    res
      .status(201)
      .json({ message: "Customer created successfully", customer });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to create customer", details: err.message });
  }
};

const getCustomers = async (req, res) => {
  const { name, email, phone, company, page = 1, limit = 10 } = req.query;

  const where = {};

  if (name) where.name = { [Sequelize.Op.like]: `%${name}%` };
  if (email) where.email = { [Sequelize.Op.like]: `%${email}%` };
  if (phone) where.phone = { [Sequelize.Op.like]: `%${phone}%` };
  if (company) where.company = { [Sequelize.Op.like]: `%${company}%` };

  try {
    const customers = await Customer.findAll({
      where,
      limit: parseInt(limit),
      offset: (page - 1) * limit,
    });

    res.status(200).json(customers);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch customers", details: err.message });
  }
};

const updateCustomer = async (req, res) => {
  const result = updateCustomerSchema.safeParse(req.body);

  if (!result.success) {
    const errors = result.error.issues.map((issue) => issue.message);
    return res.status(400).json({ error: errors.join(", ") });
  }

  const { id } = req.params;

  try {
    const customer = await Customer.findByPk(id);
    if (!customer) return res.status(404).json({ error: "Customer not found" });

    await customer.update(result.data);
    res
      .status(200)
      .json({ message: "Customer updated successfully", customer });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to update customer", details: err.message });
  }
};

const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await Customer.findByPk(id);
    if (!customer) return res.status(404).json({ error: "Customer not found" });

    await customer.destroy();
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to delete customer", details: err.message });
  }
};

module.exports = {
  createCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
};

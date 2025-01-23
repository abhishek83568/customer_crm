const express = require("express");
const {
  createCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerControllers");
const { authenticate } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authenticate, createCustomer);

router.get("/", authenticate, getCustomers);

router.put("/:id", authenticate, updateCustomer);

router.delete("/:id", authenticate, deleteCustomer);

module.exports = router;

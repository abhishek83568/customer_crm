const express = require("express");
const swaggerUi = require("swagger-ui-express");
const authRoutes = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes");
const { syncDb } = require("./models");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);

const swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

syncDb();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);

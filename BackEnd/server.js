const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
//Routes
const productRoutes = require("./Routes/productRoutes");
const userRoutes = require("./Routes/userRoutes");
const orderRoutes = require("./Routes/orderRoutes");

const { errorHandler } = require("./Middleware/errorMiddleware");
const connectDB = require("./Config/config");

//dotenv configuration
dotenv.config();

//Connecting to MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Node</h1>");
});

//Routes
app.use("/api", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Server is Up and Running.");
});

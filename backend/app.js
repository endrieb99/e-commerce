const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


// Mongoose DB connection
mongoose.connect(process.env.DB_CFG, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

let db = mongoose.connection;

//Check connection
db.once("open", function () {
  console.log("Connection to MongoDB successful");
});

//Check DB errors
db.on("error", function (err) {
  console.log(err);
});


// Import Routes
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/product");



// Use middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes)



app.listen(process.env.PORT, () => {
  console.log(`E-commerce api listening at http://localhost:${process.env.PORT}`);
})
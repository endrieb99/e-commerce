const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();




// Connect to DB
mongoose.connect('mongodb://localhost:27017/e-commerce', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {

  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("connect to db")
});


// Import Routes
const userRoutes = require("./routes/users");




// Use middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Use Routes
app.use('/api/users', userRoutes);




app.listen(process.env.PORT, () => {
  console.log(`E-commerce api listening at http://localhost:${process.env.PORT}`);
})
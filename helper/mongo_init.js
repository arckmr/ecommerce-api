const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect('mongodb://localhost:27017', {
    dbName: "Apna_Buisness",
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
  })
  .then(() => {
    console.log("mongodb connected.");
  })
  .catch((err) => console.log(err));


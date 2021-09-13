const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.MONGODB_URI, {
    dbName:  process.env.DB_NAME,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
  })
  .then(() => {
    console.log("mongodb connected.");
  })
  .catch((err) => console.log(err));


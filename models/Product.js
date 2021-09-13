const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
      name:{
          type: String
      },
      price:{
          type : Number
      }
  });

  const Product = mongoose.model("product",ProductSchema);
  module.exports = Product;
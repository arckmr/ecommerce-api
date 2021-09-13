const mongoose = require("mongoose");

const CatalogSchema = new mongoose.Schema(
  {
      user_id :{
          type : String
      },
      products:[{
          product_id: {
              type:String
          }
      }]

  });

  const Catalog = mongoose.model("catalog",CatalogSchema);

  module.exports =Catalog;
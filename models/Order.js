const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
         seller_id:{
             type:String,
              required:true
         },
         products:[
            String
        ],
         
  })

  const Order = mongoose.model("order",OrderSchema);

  module.exports = Order; 
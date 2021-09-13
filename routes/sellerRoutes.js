const express = require("express");
const router = express.Router();
const Product = require('../models/Product');
const Order = require('../models/Order');
const Catalog = require('../models/Catalog');

router.post('/seller/create-catalog',async (req,res)=>{    //recieves user_id and arrary of product_id and saves it into db   
    let cat = new Catalog ()
    let product = req.body
    try{
        cat.user_id = product.user_id;
        for(let i=0; i<product.product_id.length;i++){
            cat.product_id[i].push(product.product_id[i])
        }
         let result = await cat.save();
         res.send(result);
    }
    catch(err){
        console.log(err)
    }
});

router.get('/seller/orders/:id',async (req,res)=>{  //recieves seller_id as a parameter and sends orders of that seller
      let sId = req.params.id
     const result = Order.findOne({seller_id: sId})
     if (result){
         res.send(result);
     }
     else
     res.send("not found")
    })

module.exports = router
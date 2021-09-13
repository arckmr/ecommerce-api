const express = require("express");
const router = express.Router();
const Product = require('../models/Product');
const Order = require('../models/Order');
const User = require('../models/User');
const Catalog = require('../models/Catalog');




router.get('/buyer/list-of-sellers', async (req,res)=>{
     const myPromise = new Promise(async (resolve, reject) => {
     let result = await User.find({type:"seller"})
     let names = []
     for(let i=0; i<result.length;i++){
         names[i] =result[0].name
     }
     resolve(names)
 })
   
  myPromise.then((names)=>{
  res.send(names);})
   
});

router.get('/buyer/seller-catalog/:seller_id',async(req,res)=>{
    let seller = req.params.seller_id;
    let result = await User.findOne({user_id: seller});
    res.send(result.products)
});

router.post('/buyer/create-order/:seller_id',async(req,res)=>{
    let seller = req.params.seller_id;
    let order = new Order();
    let prod = await req.body.products
    console.log(prod)
    try {
         order.seller_id = seller;
         order.products .push(prod)
         order.save()
         res.send(order)
         
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router

const express = require("express");
const router = express.Router();
const User = require('../models/User');

router.post ('/auth/register',async (req,res)=>{   //recieves username, password, name,type
   
const usr = new User();

		try {
		        usr.name = await req.body.name
				usr.username = req.body.username;
				usr.password = req.body.password;
				usr.type = req.body.type;
				const userData = await usr.save();
				res.send(userData);
			}
        catch(err){
            console.log(err)
        }        

});

router.get ('/auth/login',async (req,res)=>{       //recieves username and password
	 let result = 0
	 result = await User.findOne({username:req.body.username,password:req.body.password})
	 console.log(result);
	 if( result){
		 res.send("success");
	 }
	 else{
		 res.send("failure");
	 }
})

module.exports = router;
const express = require("express");
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { rsort } = require("semver");
require("dotenv").config();


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
	 if(result){
	const accesstoken= jwt.sign(result.username , process.env.ACCESS_TOKEN_SECRET);
	res.send(accesstoken)}
	else
	res.status(401)
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.body.username = user
    next()
  })
};
router.get('/auth/verify', authenticateToken, (req, res) => {
   res.json(req.body.username)
});



module.exports = router;
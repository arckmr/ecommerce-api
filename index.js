const express = require ('express');
const bodyParser = require ('body-parser');
require("./helper/mongo_init");
require("dotenv").config();
const app = express();
const userResgister = require ('./routes/authRoutes');
const seller = require ('./routes/sellerRoutes');
const buyer = require ('./routes/buyerRoutes');

app.use(express.json());

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000,
    extended: true,
  })
);

app.get('/',(req,res)=>{
    res.send("success")
    
      
});

app.use('/api', userResgister);
app.use('/api', seller);
app.use('/api',buyer);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


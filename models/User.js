const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
      name :{
            type: String
      },
      username :{
            type: String
      },
      password :{
            type: String
      },
     
      type:{
          type: String
      },
      
  });

  const User = mongoose.model("user",UserSchema);

  module.exports = User;
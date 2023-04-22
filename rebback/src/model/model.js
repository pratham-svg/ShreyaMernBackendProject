const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
      name: { 
          type: String,
          trim : true, 
     
      },
     
  
      email:  {
          type: String,
          required: [true, "Please provide your E-mail"],
          unique: true,
          trim : true,
          
        },

  
      phone: {
          type: String,
          required: [true, "Please provide your phone number"],
          unique: true,
          trim : true,
         
        },
  
      password:  {
          type: String,
          required: [true, "Please provide the password"],
        },
  
      address: {
          type : Object, 
        shipping: {
          street: { type: String,
                  required: [true, "Please provide the street address"],
                  trim: true, },
          city: { type: String,
                  required: [true, "Please provide the city address"],
                  trim: true, },
          pincode: { type: String,
                  required: [true, "Please provide the pincode"],
                  trim: true,
                 },
        }
      },
    },
  
    { timestamps: true }
  );
  
  //<----------------------< Exports : UserModel >----------------------->//
  module.exports = mongoose.model("MernBackedProject", UserSchema);
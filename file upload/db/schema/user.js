const mongoose = require('mongoose');
const validator = require('validator')

var userSchema = new mongoose.Schema({

    username: { 
        type: String, required: true 
    },
    email:
    {
        type:String,
        required:true,
        unique: true,
        validate(value)
        {
            if(!validator.isEmail((value))){
                throw new error('Invalid Email Address')
            }
        }
    },
    password: { 
        type: String, 
        required: true
    }
});
  
export const User = mongoose.model('User', userSchema);
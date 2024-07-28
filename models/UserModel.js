import mongoose from "mongoose";
import validator from "validator";


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide a name']
    },
    LastName:{
        type:String,
    },
    
    email:{
        type:String,
        required:[true,'Please provide a email'],
        unique:true,
        validate:[validator.isEmail,'Please provide a valid email']
    },
    password:{
        type:String,
        required:[true,'Please provide a password'],
        minlength:6,
        select:false
    },
    location:{
        type:String,
        default:"Banglore"
    },
}, {timestamps:true});

export default mongoose.model("User", UserSchema);
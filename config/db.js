import mongoose from "mongoose";

const connectdb = async ()=>{
    try{
        const conn = mongoose.connect(process.env.MONGO_URL) 
        console.log(`Connected to database ${mongoose.connection.host}`)
    }catch(error){
        console.log(`MongoDB Error ${error}`.bgRed.white)
    }
};

export default connectdb;

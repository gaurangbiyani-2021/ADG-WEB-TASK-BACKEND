import mongoose from "mongoose";

export default async () => {
    mongoose.set('strictQuery', true);
    return mongoose.connect(process.env.MONGO_URL,{
    },
    (err)=>{
            if(!err)
            {
                console.log("connection successful");
            }
            else
            {
                console.log("error in connection "+err);
            }
        }
    );
  };
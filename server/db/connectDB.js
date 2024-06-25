import mongoose from "mongoose";
import dotenv from 'dotenv'




dotenv.config();


const connectDB = async () => {
 console.log(process.env.MONGO_URI, ' uri');
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://abhishekshetter1999:c9Cvmq7oGhnHFk5l@threads.nknntrm.mongodb.net/threads?retryWrites=true&w=majority&appName=threads",{
      //must add in order to not get any error masseges:
      useUnifiedTopology:true,
      useNewUrlParser: true,
  });
    console.log(`Mongo connected`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

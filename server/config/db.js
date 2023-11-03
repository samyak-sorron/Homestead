import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async()=>{
    try{
        mongoose.set('strictQuery',true);
        await mongoose.connect(process.env.MONGO_URL)

        console.log(`Mongodb connected ${mongoose.connected}`.bgGreen.black)
    }catch(error){
        console.log(`Mongodb Server Issue ${error}`.bgRed.black);
    }
};
export default connectDB;
import mongoose from 'mongoose';

const ownerSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
    },
    password:{
        type:String,
        required:[true,'password is required'],
    },
    phone:{
        type :String,
        required:[true,'phone is Required']
    },
});
const ownerModel= mongoose.model('Owner',ownerSchema)

export default ownerModel;
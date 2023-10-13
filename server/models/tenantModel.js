import mongoose from 'mongoose';

const tenantSchema= new mongoose.Schema({
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
const tenantModel= mongoose.model('Tenant',tenantSchema)

export default tenantModel;
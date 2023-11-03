import mongoose, { trusted } from 'mongoose';

const listingSchema= new mongoose.Schema({
    name:{

        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    rent:{
        type: Number,
        required:true
    },
    ownerId:{
        type:mongoose.Schema.ObjectId,
        // ref:'Owner',
        required:true
    },
    description:{
        type:String,
        required:true
    },
    bedrooms:{
        type:Number,
        required:true
    },
    bathrooms:{
        type:Number,
        required:true
    },
    squreFeet:{
        type:Number,
        required:true
    },
    postalCode:{
        type:String,
        required:true
    }
});

const listingModel= mongoose.model('Listing',listingSchema)

export default listingModel;
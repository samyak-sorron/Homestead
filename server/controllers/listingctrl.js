import propertyModel from '../models/listingModel.js'

const addProperty=(req,res)=>{
    const data=req.body;

    propertyModel.create({
        title:data.title,
        owner:data.owner,
        address:data.address,
        city:data.city,
        state:data.state,
        zipCode:data.zipCode,
        country:data.country,
        description:data.description,
        image:data.image,
        rent:data.rent,
        rooms:data.rooms,
        bathrooms:data.bathrooms,
        leaseLength:data.leaseLength,
        dateAvailable:data.dateAvailable,
        amenities:data.amenities
    }).then(()=>res.status(200).send({message:'data stored',success:true}))
    .catch((err)=>res.status(400).send({error:err.errors[0].message}))
}

const  getAllPropertyController=async(req,res)=> {
    try{
        const users= await propertyModel.find({})
        res.status(200).send({
            success:true,
            message:'Property data list',
            data:users
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message:'error while fetching Property',
            error
        })
    }
};

export default {
    addProperty,
    getAllPropertyController
}
import ownerModel from '../models/ownerModel.js'
import propertyModel from '../models/listingModel.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// const moment = require('moment')

// const existingOwnerId = "654b3975788341f1a4321602";
// async function insert(){
// await propertyModel.create({
//     title:"Street House",
//     owner: existingOwnerId,
//     address:"juetguna",
//     city:"Guna",
//     state:"Madhya Pradesh",
//     zipCode:"473226",
//     country:"India",
//     description:"A house is a single-unit residential building. It may range in complexity from a rudimentary hut to a complex structure of wood, masonry, concrete or other material, outfitted with plumbing, electrical, and heating, ventilation, and air conditioning systems.",
//     image:`D:\Major Project Homestead1\Homestead\frontend\src\assets\houses.png`,
//     rent:"1000",
//     rooms:"3",
//     bathrooms:"4",
//     leaseLength:"2 months",
//     dateAvailable:new Date(),
//     amenities:"wifi , cctv, noise cancellation"
    
// });
// }
// insert();

// Controller to be made for=>
// createUser,
// updateUser,
// getUsers,
// getUserAllInfoById,

const registerOwnerController=async(req,res)=>{
    // try{
        const existingUser=await ownerModel.findOne({email:req.body.email})
        if(existingUser){
            return res.status(203).send({message:'user already exist', success:false})
        }
    //     const password=req.body.password
    //     const salt= await bcrypt.genSalt(10)
    //     const hashedPassword =await bcrypt.hash(password,salt)
    //     req.body.password = hashedPassword
    //     const newUser= new ownerModel(req.body)
    //     await newUser.save()
    //     res.status(201).send({success:false,message:'Register Sucessfull',success:true});
    // }catch(error){
    //     console.log(error)
    //     res.status(500).send({success:false, message: 'Register Conroller ${error.message}'})
    // }
    const data=req.body;
    await ownerModel.create({
        name:data.fname+' '+data.lname,
        email:data.email,
        password:data.password,
        phone: data.phone        
    })
    .then(user=> {
        if(user)    res.status(200).send({message:'data stored',success:true})
    })
    .catch(error=>res.json(error))
}

const loginOwnerController= async(req,res)=>{
    // try{
    //     const user = await ownerModel.findOne({email:req.body.email})
    //     if(!user){
    //         return res.status(200).send({message:'user not found', success:false})   
    //     }
    //     // const isMatch = await bcrypt.compare(req.body.password, user.password)
    //     // if(!isMatch){
    //     //     return res.status(200).send({message:'Invalid Email or Password', success:false});
    //     // }
    //     // const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'});
    //     res.status(200).send({message:"Login Success",success:true,token});
    // }catch(error){
    //     console.log(error)
    //     res.status(500).send({message:'Error in Login CTRL ${error.message}'});
    // }
    const {email,password}=req.body;
    ownerModel.findOne({email:email})
    .then(user=>{
        if(user){
           if(user.password === password)   res.status(200).send({message:'success',success:true , data:user})
           else res.status(201).send({message:"Incorrect Password",success:false})
        }
        else res.status(300).json("No User found")       
    })
    .catch(error=>res.json(error))
};

const getOwnerByIdController=async(req,res)=>{
    const data=req.body
    console.log(data.ownerId)
    try{
        if(ownerModel.findOne({_id:data.ownerId})){
            await ownerModel.findOne({_id:data.ownerId})
            .then(docs=>{
                console.log("Result :",docs);
                res.status(200).send({
                    success:true,
                    message:' Single user info fetch',
                    data:docs
                })
            })
            .catch((err)=>{
                console.log(err);
            });
            // return data=>res.status(200).send({
            //     success:true,
            //     message:' Single user info fetch',
            //     data:owner            
            // });
        }
        else{
            return data=>res.status(201).send({
                success:false,
                message:' User not avalilable'           
            })
        }
        // await ownerModel.findOne({_id:data.ownerId})
        // .then(data=>res.status(200).send({
        //     success:true,
        //     message:' Single user info fetch',
        //     data:owner            
        // }))
        
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,error,
            message: 'Error in Sigle info'
        })
    }
}


const listingOwnerController=()=>{

};

export{
    loginOwnerController,
    registerOwnerController,
    getOwnerByIdController,
    listingOwnerController,
}
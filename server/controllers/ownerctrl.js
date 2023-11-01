import ownerModel from '../models/ownerModel.js'
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'

// const moment = require('moment')

const registerOwnerController=async(req,res)=>{
    // try{
    //     const existingUser=await ownerModel.findOne({email:req.body.email})
    //     if(existingUser){
    //         return res.status(200).send({message:'user already exist', success:false})
    //     }
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

    ownerModel.create(req.body)
    .then(owner=> res.json(owner))
    .catch(error=>res.json(error))
}

const loginOwnerController= async(req,res)=>{
    // try{
    //     const user = await ownerModel.findOne({email:req.body.email})
    //         if(!user){
    //             return res.status(200).send({message:'user not found', success:false})   
    //     }
    //     const isMatch = await bcrypt.compare(req.body.password, user.password)
    //     if(!isMatch){
    //         return res.status(200).send({message:'Invalid Email or Password', success:false});
    //     }
    //     const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'});
    //     res.status(200).send({message:"Login Success",success:true,token});
    // }catch(error){
    //     console.log(error)
    //     res.status(500).send({message:'Error in Login CTRL ${error.message}'});
    // }

    const {email,password}=req.body;
    ownerModel.findOne({email:email})
    .then(user=>{
        if(user){
           if(user.password === password)   res.json("success")
           else res.json("Incorrect Password")
        }
        else res.json("No User found")       
    })
    .catch(error=>res.json(error))
};
export{
    loginOwnerController,
    registerOwnerController,
}
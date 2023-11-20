import tenantModel from "../models/tenantModel.js"

const loginTenantController=(req,res)=>{
    const {email,password}=req.body;
    tenantModel.findOne({email:email})
    .then(user=>{
        if(user){
           if(user.password === password)   res.status(200).json("success");
           else res.status(201).json("Incorrect Password");
        }
        else res.json("No User found")       
    })
    .catch(error=>res.json(error))
}

const registerTenantController=async(req,res)=>{
    const existingUser=await tenantModel.findOne({email:req.body.email})
    if(existingUser){
        return res.status(203).send({message:'user already exist', success:false})
    }

    const data=req.body;
    tenantModel.create({
        name:data.fname+' '+data.lname,
        email:data.email,
        password:data.password,
        phone: data.phone
    })
    .then(user=> {
        if(user)    res.status(200).send({message:'data stored',success:true})
    })
    .catch(error=>res.status(400).json(error))
}

const fetchData=(req,res)=>{
    
}



export{
    loginTenantController,
    registerTenantController
}
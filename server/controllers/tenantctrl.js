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

const registerTenantController=(req,res)=>{
    if(tenantModel.findOne({email:req.body.email}))  res.status(201).json("Email already exist");
    else{
        tenantModel.create(req.body)
        .then(tenant=> res.json(tenant))
        .catch(error=>res.json(error))
    }
}

export{
    loginTenantController,
    registerTenantController
}
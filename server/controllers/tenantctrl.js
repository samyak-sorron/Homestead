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
    if(tenantModel.findOne({email:req.body.email}))  res.status(203).json("Email already exist");
    else{
        const data=req.body;
        ownerModel.create({
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
}

export{
    loginTenantController,
    registerTenantController
}
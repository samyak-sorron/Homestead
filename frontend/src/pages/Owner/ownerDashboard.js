import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Navbar, Sidebar } from '../../components'
const URL='http://localhost:8080/api/v1/owner';

const OwnerDashboard = () => {

  const [owner,setowner]= useState([])
  const ownerId=localStorage.getItem('ownerId')
  const getOwnerInfo= async ()=> {
    try{
        const res = await axios.post(URL+'/getOwnerById',{ownerId: ownerId},
        
        {
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        // console.log(res);
        if(res.data.success){
          setowner(res.data.data)
        }
    }catch(error){
        console.log(error)
    }
};

useEffect(()=>{
  getOwnerInfo();
},[]);


  useEffect(()=>{
    document.title="DashBoard";
  })


console.log(owner)
  return (
    <div>
      <Navbar/>
      <div className='grid grid-cols-4'>
        <Sidebar/>
        <div className='text-3xl '>
          <h1 className="text-2xl font-semibold align-middle mt-3">Welcome {owner.name}</h1>
          <h3 className="text-2xl font-semibold align-middle mt-3"> Email : {owner.email}</h3>
          <h3 className="text-2xl font-semibold align-middle mt-3"> Phone :{owner.phone}</h3>
        </div>
      </div>
    </div>
  )
}

export default OwnerDashboard
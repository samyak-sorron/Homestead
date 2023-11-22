import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Navbar, Sidebar } from '../../components'
const URL='http://localhost:8080/api/v1/owner';

const OwnerDashboard = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail]= useState('John.Doe@gmail.com')

  const [owner,setowner]= useState([])
  const params= useParams()
  const getOwnerInfo= async ()=> {
    try{
        const res = await axios.post('http://localhost:8080/api/v1/owner/getOwnerById',{ownerId: params.id},
        {
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
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

// console.log(owner);
// console.log(setowner)
  return (
    <div>
      <Navbar/>
      <div className='grid grid-cols-4'>
        <Sidebar/>
        <div className='text-3xl'>
          <h1>Welcome {name}</h1>
          <h3> Email : {email}</h3>
        </div>
      </div>
    </div>
  )
}

export default OwnerDashboard
import React,{useState,useEffect} from 'react'
import { Navbar } from '../../components'

const URL="localhost:8080";
const OwnerDashboard = () => {
    const [name, setName] = useState('John Doe');

    useEffect(()=>{
        document.title="DashBoard";
    })


  return (
    <div>
        <Navbar/>
        <div className='px-rm pt-18 mx-auto container columns-3 gap-8 mb-5'>
           <img className='w-full h-auto object-cover rounded-xl mb-8' 
                src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1600' 
                alt='hehe'
            ></img> 
           <div>
            <h1>{name}</h1>
            <p>location</p>
           </div>
        </div>
    </div>
  )
}

export default OwnerDashboard
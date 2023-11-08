import React,{useState,useEffect} from 'react'
import { Navbar, Sidebar } from '../../components'

const OwnerDashboard = () => {
  const [name, setName] = useState('John Doe');

  useEffect(()=>{
    document.title="DashBoard";
  })


  return (
    <div>
      <Navbar/>
      <div className='grid grid-cols-4'>
        <Sidebar/>
        <div className='text-3xl'>
          <h1>Welcome {name}</h1>
        </div>
      </div>
    </div>
  )
}

export default OwnerDashboard
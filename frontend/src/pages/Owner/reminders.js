import React,{useState,useEffect} from 'react'
import { Navbar, Sidebar } from '../../components'

const Remainders = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail]= useState('John.Doe@gmail.com')

  useEffect(()=>{
    document.title="DashBoard";
  })


  return (
    <div>
      <Navbar/>
      <div className='grid grid-cols-[max-content_1fr] gap-x-4'>
        <Sidebar/>
        
        <div className='text-3xl max-w-full'>
        <h2>Welcome to Remainders Section</h2>
        <br></br>
          <div className='card m-2' >
            <div className='card-body'>


                <tr> 
                    <td> Tenant Name</td>
                    <td></td>
                    <td>Due Amount</td>
                    <td>Send remainder</td>
                </tr>
                
            </div>
        </div>
    
        </div>
      </div>
    </div>
  )
}

export default Remainders
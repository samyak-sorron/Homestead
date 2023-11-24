import React,{useState,useEffect} from 'react'
import { Navbar, Sidebar } from '../../components'

const OwnerTenants = () => {
  useEffect(()=>{
    document.title="DashBoard";
  })
  const data = [
    { name: "Anom", contact: "13543544", house: "Urban Oasis Rentals: Room 2" },
    { name: "Megha", contact: "22152676", house: "Black Lake Cabin" },
    { name: "Subham", contact: "3654542", house: "Urban Oasis Rentals: Room 5" },
]


  return (
    <div>
      <Navbar/>
      <div className='grid grid-cols-[max-content_1fr] gap-x-4'>
        <Sidebar/>
        
        <div className='text-3xl max-w-full'>
        <h2 className="text-2xl font-semibold align-middle mt-3" >Welcome to Tenants Section</h2>
        <br></br>
        <div className="App">
           
            <table class="table-auto" WIDTH="700">
                <thead>
                  <tr >
                    <th class="px-4 py-2 text-lg">Tenant Name</th>
                    <th class="px-4 py-2 text-lg">Contact No.</th>
                    <th class="px-4 py-2 text-lg">House Rented</th>
                  </tr>
                </thead>
                <tbody>
                {data.map((val, key) => {
                    return (
                  <tr key={key}>
                    <td class="border px-4 py-2 text-lg"><a href="#" className="text-gray-700 ">{val.name}</a></td>
                    <td class="border px-4 py-2 text-lg">{val.contact}</td>
                    <td class="border px-4 py-2 text-lg"><a href="#" className="text-gray-700">{val.house}</a></td>
                  </tr>
                     )
                    })}

  </tbody>
</table>
        </div>
    
        </div>
      </div>
    </div>
  )
}

export default OwnerTenants
import React,{useState,useEffect} from 'react'
import { Navbar, Sidebar } from '../../components'

const Bills = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail]= useState('John.Doe@gmail.com')

  useEffect(()=>{
    document.title="DashBoard";
  })
  const data = [
    { name: "Anom", bill: "b242", amount: "$1000" },
    { name: "Megha", bill: "b234", amount: "$1500" },
    { name: "Subham", bill: "b323", amount: "$600" },
]


  return (
    <div>
      <Navbar/>
      <div className='grid grid-cols-[max-content_1fr] gap-x-4'>
        <Sidebar/>
        
        <div className='text-3xl max-w-full'>
        <h2 className="text-2xl font-semibold align-middle mt-3" >Welcome to Bills Section</h2>
        <br></br>
        <div className="App">
           
            <table class="table-auto" WIDTH="700">
                <thead>
                  <tr >
                    <th class="px-4 py-2 text-lg">Bill No.</th>
                    <th class="px-4 py-2 text-lg">Name</th>
                    <th class="px-4 py-2 text-lg">Amount</th>
                  </tr>
                </thead>
                <tbody>
                {data.map((val, key) => {
                    return (
                  <tr key={key}>
                    <td class="border px-4 py-2 text-lg">{val.bill}</td>
                    <td class="border px-4 py-2 text-lg">{val.name}</td>
                    <td class="border px-4 py-2 text-lg">{val.amount}</td>
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

export default Bills
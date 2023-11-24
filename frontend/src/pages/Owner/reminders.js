import React,{useState,useEffect} from 'react'
import { Navbar, Sidebar } from '../../components'

const Remainders = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail]= useState('John.Doe@gmail.com')

  useEffect(()=>{
    document.title="DashBoard";
  })
  const data = [
    { name: "Anom", remainder: "Yes", amount: "$3000" },
    { name: "Megha", remainder: "No", amount: "$500" },
    { name: "Subham", remainder: "Yes", amount: "$1100" },
]

  return (
    <div>
      <Navbar/>
      <div className='grid grid-cols-[max-content_1fr] gap-x-4'>
        <Sidebar/>
        
        <div className='text-3xl max-w-full'>
        <h2 className="text-2xl font-semibold align-middle mt-3"> Welcome to Remainders Section</h2>
        <br></br>
        <div className="App">
        <table class="table-auto" WIDTH="700">
                <thead>
                  <tr >
                    <th class="px-4 py-2 text-lg">Tenant Name</th>
                    <th class="px-4 py-2 text-lg">Due Amount</th>
                    <th class="px-4 py-2 text-lg">Reminder</th>
                  </tr>
                </thead>
                <tbody>
                {data.map((val, key) => {
                    return (
                  <tr key={key}>
                    <td class="border px-4 py-2 text-lg">{val.name}</td>
                    <td class="border px-4 py-2 text-lg">{val.amount}</td>
                    <td class="border px-4 py-2 text-lg">{val.remainder}</td>
                  </tr>
                     )
                    })}

  </tbody>
</table>


            {/* <table   WIDTH="700">
                <tr>
                    <th>Tenant Name</th>
                    <th>Due Amount</th>
                    <th>Send Remainder</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr  key={key}>
                            <td>{val.name}</td>
                            <td >{val.amount}</td>
                            <td >{val.remainder}</td>
                        </tr>
                    )
                })}
            </table> */}
        </div>
    
        </div>
      </div>
    </div>
  )
}

export default Remainders
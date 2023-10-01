import { Dropdown } from "../components"
import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'

export default function Home() {

  // const [id, setId] = useState(null)

  return (
    <div>
      <nav className='flex justify-between p-5 align-middle'>
        <div>
          <h3 className="text-xl">Homestead</h3>
        </div>
        <div  className='flex justify-evenly px-3'>
          <div className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-xl font-semibold text-gray-900 ring-gray-300 hover:bg-gray-100"><FiSearch/></div>
          <Dropdown
            logedin={false}
          />
        </div>
      </nav>
      <hr/>


      {/* <Card
        id={1}
        name={'heck'}
        prompt="2 dogs under the street light"
        photo={null}
      /> */}
    </div>
  )
}
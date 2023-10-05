import React from 'react'
import { Dropdown } from "../components"
import {FiSearch} from 'react-icons/fi'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='flex justify-between px-10 py-4 align-middle'>
        <div>
          <h3 className="text-xl">Homestead</h3>
        </div>
        <div>
        <ul className='flex'>
            <li className='hover:bg-gray-100 hover:border-b-4 hover:border-red-500 active:border-b-4 active:border-red-500'><button className='px-4 py-1'>Buy</button></li>
            <li className='hover:bg-gray-100 hover:border-b-4 hover:border-red-500 active:border-b-4 active:border-red-500'><button className='px-4 py-1'>Rent</button></li>
            <li className='hover:bg-gray-100 hover:border-b-4 hover:border-red-500 active:border-b-4 active:border-red-500'><button className='px-4 py-1'>Sell</button></li>
          </ul>
        </div>
        <div  className='flex justify-evenly px-3'>
          <Link to='' className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-xl font-semibold text-gray-900 ring-gray-300 hover:bg-gray-100"><FiSearch/></Link>
          <Dropdown
            logedin={false}
          />
        </div>
      </nav>
  )
}

export default Navbar
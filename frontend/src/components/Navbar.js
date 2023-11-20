import React from 'react'
import { Dropdown } from "../components"
import {FiSearch} from 'react-icons/fi'
import { Link } from "react-router-dom"

const Navbar = () => {

  const loginStatus=localStorage.getItem('ownerLoginStatus') || localStorage.getItem('tenantLoginStatus');
  
  return (
    <nav className='flex justify-between px-10 py-4 align-middle'>
      <div>
        <h3 className="text-xl">Homestead</h3>
      </div>
      <div>
      <ul className='flex'>
          <li className='hover:bg-gray-100 hover:border-b-4 hover:border-red-500 active:border-b-4 active:border-red-500'><Link to="" className='px-4 py-2'>Buy</Link></li>
          <li className='hover:bg-gray-100 hover:border-b-4 hover:border-red-500 active:border-b-4 active:border-red-500'><Link to="/propertyList" className='px-4 py-2'>Rent</Link></li>
          <li className='hover:bg-gray-100 hover:border-b-4 hover:border-red-500 active:border-b-4 active:border-red-500'><Link to={loginStatus?'/addProperty':'/owner-register'} className='px-4 py-2'>Sell</Link></li>
        </ul>
      </div>
      <div  className='flex justify-evenly px-3'>
        <Link to='' className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-xl font-semibold text-gray-900 ring-gray-300 hover:bg-gray-100"><FiSearch/></Link>
        <Dropdown/>
      </div>
    </nav>
  )
}

export default Navbar
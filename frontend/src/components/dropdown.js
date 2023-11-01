import React, { useState } from 'react';
import {FaRegUserCircle} from "react-icons/fa"

const Dropdown = ({logedin}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-xl font-semibold text-gray-900 ring-gray-300 hover:bg-gray-100" onClick={()=>setIsOpen(!isOpen)}>
        <FaRegUserCircle/>
      </button>
      {isOpen && (
        <ul className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {logedin ? (
            <>
            {logedin.cat==="owner"?
            <li><a href="/owner-dashboard" className='text-gray-700 block px-4 py-2 text-sm'>Dashboard</a></li>:
            <li><a href="/tenant-dashboard" className='text-gray-700 block px-4 py-2 text-sm'>Dashboard</a></li>
            }
              
              <li><a href="/logout" className='text-gray-700 block px-4 py-2 text-sm'>Logout</a></li>
            </>
          ) 
          :
          (
            <>
              <li><a href="/tenant-login" className='text-gray-700 block px-4 py-2 text-sm'>Tenant Sign In</a></li>
              <li><a href="/owner-login" className='text-gray-700 block px-4 py-2 text-sm'>Owner Sign In</a></li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
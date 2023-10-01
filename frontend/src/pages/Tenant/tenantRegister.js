import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const TenantRegister = () => {

    useEffect(() => {
      document.title='Register';
    }, [])
    
    const [details, setdetails] = useState({
        fname:'',
        lname:'',
        email:'',
        password:''
    })

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">First Name</label>
            <input type="text" className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Last Name</label>
            <input type="text" className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input type="email" className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input type="password" className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
            <input type="password" className="mt-1 p-2 w-full border rounded" />
          </div>
          <button className="bg-green-500 text-white p-2 rounded w-full hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300">
            Register
          </button>
        </form>
        <p className="text-sm mt-4">
          Already have an account? <Link to="/tenant-login" className="text-green-500">Login here</Link>.
        </p>
      </div>
    </div>
  );
};

export default TenantRegister;

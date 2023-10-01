import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

const TenantLogin = () => {

    useEffect(() => {
        document.title='Login';
    }, [])
    const [details, setDetails] = useState({
        email:'',
        password:''
    })
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input type="email" className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input type="password" className="mt-1 p-2 w-full border rounded" />
          </div>
          <button className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Login
          </button>
        </form>
        <p className="text-sm mt-4">
          Don't have an account? <Link to="/tenant-register" className="text-blue-500">Register here</Link>.
        </p>
      </div>
    </div>
  );
};

export default TenantLogin;

import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const OwnerRegister = () => {

    useEffect(() => {
      document.title='Register';
    }, [])
    
    const [details, setDetails] = useState({
        fname:'',
        lname:'',
        email:'',
        password:''
    })

    const [cnfpassword, setcnfpassword] = useState('')

    const handleChange=(event)=>{
      setDetails({
          ...details,
          [event.target.name]:event.target.value
      });        
  }

  console.log(details);
  console.log(cnfpassword);

  const handleSubmit=()=>{

  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">First Name</label>
            <input type="text" name='fname' value={details.fname} onChange={handleChange} className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Last Name</label>
            <input type="text" name='lname' value={details.lname} onChange={handleChange} className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input type="email" name='email' value={details.email} onChange={handleChange} className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input type="password" name='password' value={details.password} onChange={handleChange} className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
            <input type="password" name='cnfpassword' value={cnfpassword} onChange={e=>setcnfpassword(e.target.value)} className="mt-1 p-2 w-full border rounded" />
            {cnfpassword!==details.password &&
              <div className='text-sm text-red-700 text-opacity-50'>password does not match the Password you entered.</div>
            }
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

export default OwnerRegister;

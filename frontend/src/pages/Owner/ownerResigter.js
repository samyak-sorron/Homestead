import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const URL='http://localhost:8080/api/v1/owner';

const OwnerRegister = () => {

  useEffect(() => {
    document.title='Register';
  }, [])
  
  const [details, setDetails] = useState({
      fname:'',
      lname:'',
      email:'',
      password:'',
      phone:''
  })

  const [cnfpassword, setcnfpassword] = useState('')

  const [status, setStatus] = useState(0)

  const handleChange=(event)=>{
    setDetails({
        ...details,
        [event.target.name]:event.target.value
    }); 
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(details),
    };

    try {
      if(details.email && details.fname && details.password && details.phone){
        await fetch(URL+'/register', requestOptions)
        .then(res=>{
          if(res.status===203)  setStatus(-1);
          else if(res.status===200){
            setStatus(1)
            setTimeout(() => {
              window.location.href = '/owner-login';
            }, 3000);
          };
        })
        .catch(error=>console.log(error))
      }
      else{
        console.log('invalid input');
      }
    }catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Register</h2>
        <form>
          {status===-1 &&
            <p className='text-red-500 text-center'>The user with this username already exist. either login or forget password</p>
          }
          {status===1 &&
            <p className='text-green-500 self-center'>Successfully Registerd</p>
          }
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
            <label className="block text-sm font-medium text-gray-600">Ph. No.</label>
            <input type="tel" name='phone' value={details.phone} onChange={handleChange} className="mt-1 p-2 w-full border rounded" />
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
          
          <button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded w-full hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300">
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

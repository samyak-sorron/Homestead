import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

const URL='http://localhost:8080/api/v1/owner';

const OwnerLogin = () => {

  useEffect(() => {
      document.title='Login';
  }, [])

  const [details, setDetails] = useState({
      email:'',
      password:''
  })

  const [valid, setValid] = useState(true)
  const [loggedin, setLoggedin] = useState(false)

  const handleChange=(event)=>{
      setDetails({
          ...details,
          [event.target.name]:event.target.value
      });
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(details),
    };

    try {
      if(details.email && details.password){
        await fetch(URL + '/login', requestOptions)
        .then(res => {
          if (res.ok) {
            localStorage.setItem('ownerLoginStatus',true);
            // localStorage.setItem('ownerId',res.data.owner_id);
            return res.json();
          } else {
            throw new Error('Network response was not ok.');
          }
        })
        .then(data => {
          
          if (data.success === true) {
            setLoggedin(true);

            setTimeout(() => {
              window.location.href = '/';
            }, 3000);
          }
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });      
      }
      else{
        setValid(false);
        console.log('invalid input');
      }
    }catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Login</h2>
        {!valid&& <p className='text-red-500'>either email or password is missing</p>}
        {loggedin&& <p className='text-green-500'>You've been successfully logged in</p>}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input type="email"  name='email' value={details.email} onChange={handleChange} className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input type="password" name='password' value={details.password} onChange={handleChange} className="mt-1 p-2 w-full border rounded" />
          </div>
          <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
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

export default OwnerLogin;

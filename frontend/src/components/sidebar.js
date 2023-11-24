import React,{useState,useEffect} from 'react'
import axios from 'axios'
const URL='http://localhost:8080/api/v1/owner';
const Sidebar = () => {
  const [profilePic, setProfilePic] = useState(null);

  const [owner,setowner]= useState([])
  const ownerId=localStorage.getItem('ownerId')
  const getOwnerInfo= async ()=> {
    try{
        const res = await axios.post(URL+'/getOwnerById',{ownerId: ownerId},
        
        {
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        // console.log(res);
        if(res.data.success){
          setowner(res.data.data)
        }
    }catch(error){
        console.log(error)
    }
};

useEffect(()=>{
  getOwnerInfo();
},[]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    previewFile(file);
 };

 


  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfilePic(reader.result);
    };
  };
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200">
      <div className="p-6 flex">
        <div className="w-16 h-16 mr-5 rounded-full border-4 border-dashed border-gray-300 bg-gray-100 flex items-center justify-center">
          {profilePic ? (
            <img className="w-10 h-10" src={profilePic} alt="User Profile Picture" />
          ) : (
            <label htmlFor="user-pic-upload">
              <svg className="w-6 h-6 text-gray-400 bg-white rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </label>
          )}
          <input id="user-pic-upload" type="file" onChange={handleImageUpload} className="hidden" />
        </div>
          <h1 className="text-2xl font-semibold align-middle mt-3">{owner.name}</h1>
      </div>
      <nav className="px-6 mt-10">
        <ul className="space-y-4">
          <li>
            <a href="/owner-dashboard" className="text-gray-700 flex mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <span className="ml-4">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 flex mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2m7 0v-2a5.002 5.002 0 00-7.737 5.707"></path></svg>
              <span className="ml-4">Budgets</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 flex mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              <span className="ml-4">Payments</span>
            </a>
          </li>
          <li>
            <a href="/owner-bills" className="text-gray-700 flex mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span className="ml-4">Bills</span>
            </a>
          </li>
          <li>
            <a href="/owner-remainder" className="text-gray-700 flex mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              <span className="ml-4">Reminders</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
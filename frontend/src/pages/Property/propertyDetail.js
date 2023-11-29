import React,{useEffect, useState} from 'react'
import {Navbar} from '../../components'
import {Link, useParams} from "react-router-dom";
import {GoLocation} from 'react-icons/go'
import {AiOutlineWifi,AiOutlineCar} from 'react-icons/ai'
import {Card} from '../../components'
import axios from 'axios';

import {house1} from '../../assets';
const URL='http://localhost:8080/api/v1/property';
const PropertyDetail = () => {

  const [houses, setHouses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [property,setproperty]= useState([])
    let propertyId=useParams()

    const [owner,setowner]= useState([])

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get(URL+'/get-all-property');
        setHouses(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    
    const getPropertyInfo= async ()=> {
      try{
          const res = await axios.post(URL+'/get-property',{propertyId: propertyId},
          
          {
              headers:{
                  Authorization:`Bearer ${localStorage.getItem('token')}`
              }
          })
          // console.log(res);
          if(res.data.success){
            setproperty(res.data.data)
          }
      }catch(error){
          console.log(error)
      }
  };

  let ownerId= property.owner
  const getOwnerInfo= async ()=> {
    try{
        const res = await axios.post('http://localhost:8080/api/v1/owner/getOwnerById',{ownerId: ownerId},
        
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


    fetchHouses();
    getPropertyInfo();
    getOwnerInfo();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  
 console.log(property.owner)
  return (
    <div>
      <Navbar/>
      <div className='mx-auto max-w-screen-xl'>
        <aside className='hidden border rounded-md sticky grid-cols-3 float-right md:inline-block p-5 mt-16 mb-16'>
          <div className='max-w-md'>
            <div className='flex justify-between mb-3'>
              <div className='text-2xl'>${property.rent}/mo</div>
              <p className=''>rating: 4.2</p>
            </div>
            <p>{property.description}</p>
          </div>
          <button className='border rounded-lg  bg-green-500 p-2 mt-5 w-full'>Reserve</button>
        </aside>
        <div className='p-6'>
          <div className='mb-3'>
            <img src={house1} alt='housepic' className='md:w-1/3 rounded-md'/>
          </div>
          <div className=''>
            <p className='text-3xl font-semibold'>{property.title}</p>
            <div className='flex'><GoLocation className='align-middle w-5 h-6'/><span className='text-xl'>{property.address}  {property.city}, {property.state}</span> </div>
            <div>rating</div>
            <div>owner name</div>
            <div className='rounded border inline-block p-6 max-w-3xl'>
              <h1 className='text-xl py-2'>Extra info</h1>
              <p>To find articles, simply search for your topic of interest (e.g., "property investment tips," "buying a house guide," "real estate market trends") in search engines like Google. Additionally, you can explore social media platforms like LinkedIn, where many real estate professionals and organizations share articles and insights related to the property industry.</p>
            </div>
          </div>
        </div>
        <hr/>
        <div className='p-2 mb-4'>
          <h1 className='text-2xl mb-3'>Aminities</h1>
          <ul className='grid grid-cols-4 gap-4'>
            <li className='flex align-middle'><AiOutlineWifi className='text-xl'/> WiFi</li>
            <li className='flex align-middle'><AiOutlineCar className='text-xl'/> Free Parking</li>
          </ul>
        </div>
        <div>
          <h1 className='text-2xl mb-2'>Suggestions</h1>
          <div></div>
        </div>
        <hr/>


        <div className=" mt-2">
        <div className="grid md:grid-cols-3 gap-5 sm:grid-cols-2 place-items-center">
     {houses.length > 0 && houses.map((house)=>(
      // console.log(house),
        <Link to={`/propertyDetails/${house._id}`}>
        <Card
            _id={house._id}
            name={house.name}
            prompt={house.title}
            photo={house1}
            city={house.city}
            rent={house.rent}

        /></Link>
      ))}
      </div>
        </div>
      </div>
      
      
      
    </div>
  );
}

export default PropertyDetail;
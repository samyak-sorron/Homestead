import { Card, Navbar } from "../components"
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom"
import { city ,house1  } from "../assets"
const URL='http://localhost:8080/api/v1/property';
export default function Home() {

  const [propertyData, setPropertyData] = useState([])
  
  useEffect(() => {
    document.title='Homestead';

    try {
      const response = axios.get(URL+'/get-all-property');
      setPropertyData(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [])

  const [houses, setHouses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

    fetchHouses();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }
  
  return (
    <div>
      <Navbar/>
      <div className="relative w-full h-[27rem] sm:h-[27rem] mb-8">
        <img src={city} alt="city" className="w-full h-full object-cover" />
        <div className="absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl mb-4 font-semibold antialiased">Your Home Away from Home</h1>
          <h1 className="text-4xl font-semibold antialiased">Where Comfort Meets Convenience</h1>
        </div>
      </div>
      {/* top rated property listed */}
      <div className='mx-auto max-w-screen-xl'>
      <div className="flex justify-between mt-10">
        <h1 className="text-4xl text-center mb-4">Recommendations </h1>
        <Link className="underline text-blue-500 align-baseline" to='/propertyList'>see all</Link>
      </div>
      
      <div className="grid md:grid-cols-3 gap-5 sm:grid-cols-2 place-items-center">
      {houses.length > 0 && houses.map((house)=>(
      console.log(house._id),
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
  )
}
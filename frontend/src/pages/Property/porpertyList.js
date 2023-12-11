import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from '../../components'
import { house1,house,houses,city } from '../../assets';

const URL='http://localhost:8080/api/v1/property';

const PorpertyList = () => {

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
// console.log(houses);

  return (
    <div className='mx-auto max-w-screen-xl mt-20'>
      <h1 className="text-2xl font-semibold align-middle mt-3">Here is a List of All Property </h1>
      <div className="grid md:grid-cols-3 gap-5 sm:grid-cols-2 place-items-center">
     {houses.length > 0 && houses.map((house)=>(
      console.log(house),
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

    
  )
}

export default PorpertyList
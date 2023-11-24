import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from '../../components'

const URL='http://localhost:8080/api/v1/property';

const PorpertyList = () => {

  const [houses, setHouses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get(URL+'/get-all-property');
        setHouses(response.data);
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
    <div className='mx-auto max-w-screen-xl mt-20'>
      {houses.map(house=>(
        <Link to={`/propertyDetails/${house.id}`}>
        <Card
            _id={house._id}
            name={house.title}
            prompt={"hello"}
            photo={house.image}
        /></Link>
      ))}
        
    </div>
  )
}

export default PorpertyList
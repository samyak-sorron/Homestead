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
     {houses.length > 0 && houses.map((house)=>(
      // console.log("bwkgjjjglj"),
        <Link to={`/propertyDetails/${house.id}`}>
        <Card
            _id={house.id}
            name={house.name}
            prompt={house.title}
            photo={house.image}
        /></Link>
      ))}
       {/* <div className="">
          <Link to={`/propertyDetails/2`}>
          <Card 
            id={houses._id}
            name={houses.name}
            prompt={houses.title}
            photo={houses.image}
          /></Link>
        </div> */}
        <h1>SJADKFASDFASDFAS</h1>
    </div>

    
  )
}

export default PorpertyList
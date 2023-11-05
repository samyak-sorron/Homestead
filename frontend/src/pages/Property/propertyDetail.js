import React,{useEffect, useState} from 'react'
import {Navbar} from '../../components'
import {Link, useParams} from "react-router-dom";
import {GoLocation} from 'react-icons/go'
import {AiOutlineWifi,AiOutlineCar} from 'react-icons/ai'
import {Card} from '../../components'

import {house1} from '../../assets';

const PropertyDetail = () => {
  
  const [place,setPlace] = useState(null);

  let property_id = useParams();

  useEffect(()=>{
    document.title='Property Details'

    try {
      fetch(URL+`/property-detail/${property_id}`,{})
      .then(res=>{
        setPlace(res.data)
      });
    } catch (error) {
      console.log(error);
    }
  })

  return (
    <div>
      <Navbar/>
      <div className='mx-auto max-w-screen-xl'>
        <aside className='hidden border rounded-md sticky grid-cols-3 float-right md:inline-block p-5 mt-16 mb-16'>
          <div className='max-w-md'>
            <div className='flex justify-between mb-3'>
              <div className='text-2xl'>$5000/mo</div>
              <p className=''>rating: 4.2</p>
            </div>
            <p>To find articles, simply search for your topic of interest (e.g., "property investment tips," "buying a house guide," "real estate market trends") in search engines like Google. Additionally, you can explore social media platforms like LinkedIn, where many real estate professionals and organizations share articles and insights related to the property industry.</p>
          </div>
          <button className='border rounded-lg  bg-green-500 p-2 mt-5 w-full'>Reserve</button>
        </aside>
        <div className='p-6'>
          <div className='mb-3'>
            <img src={house1} alt='housepic' className='md:w-1/3 rounded-md'/>
          </div>
          <div className=''>
            <p className='text-3xl font-semibold'>House</p>
            <div className='flex'><GoLocation className='align-middle w-5 h-6'/><span className='text-xl'>location</span> </div>
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
        <div className="grid md:grid-cols-3 gap-5 grid-cols-2 place-items-center">
      <div className="">
          <Link to={`/propertyDetails/2`}>
          <Card
            id={2}
            name={"property"}
            prompt="2 dogs under the street light"
            photo={house1}
          /></Link>
        </div>
        <div className="">
          <Link to={`/propertyDetails/3`}>
          <Card
            id={3}
            name={"property"}
            prompt="2 dogs under the street light"
            photo={house1}
          /></Link>
        </div>
        <div className="">
          <Link to={`/propertyDetails/4`}>
          <Card
            id={4}
            name={"property"}
            prompt="2 dogs under the street light"
            photo={house1}
          /></Link>
        </div>
        </div>
        </div>
      </div>
      
      
      
    </div>
  );
}

export default PropertyDetail;
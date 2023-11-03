import React,{useEffect, useState} from 'react'
import {Navbar} from '../components'
import {Link, useParams} from "react-router-dom";

import { Container, Card, Heading, Text } from 'tailwindcss-react-kit';
// import BookingWidget from "../BookingWidget";
// import PlaceGallery from "../PlaceGallery";
// import AddressLink from "../AddressLink";
import {house1} from '../assets';

const PropertyDetail = () => {
  
  // const [details, setDetails] = useState({})
  // const {id} = useParams();
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

  // if (!place) return '';

  return (
    <div>
    <Navbar/>
    <div className="grid grid-cols-4 px-20">
      <div className=''>
        <img src={house1} alt='house' style={{"height":"50vh", "width":"50vh"}}/>
      </div>
      <div className=''>
        <h1 className="">Samyak</h1>
        {/* <AddressLink>{place.address}</AddressLink> */}
        <p>address</p>
        {/* <PlaceGallery place={place} /> */}
        <p>place</p>
        <div className="">
          <div>
            <div className="">
              <h2 className="">Description</h2>
              {/* {place.description} */}
            </div>
            Check-in: checkIn<br />
            {/* Check-in: {place.checkIn}<br /> */}
            Check-out: checkOut<br />
            {/* Check-out: {place.checkOut}<br /> */}
            Max number of guests: 4
            {/* Max number of guests: {place.maxGuests} */}
          </div>
          <div>
            {/* <BookingWidget place={place} /> */}
          </div>
        </div>
        <div className="bg-white -mx-8 px-8 py-8 border-t">
          <div>
            <h2 className="font-semibold text-2xl">Extra info</h2>
          </div>
          <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">extra</div>
          {/* <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">{place.extraInfo}</div> */}
        </div>
      </div>
    </div>
    <div>
    <Container className="my-8">
      <Card className="text-center">
        <Heading>Standard</Heading>
        <Text>
          <span className="text-4xl font-bold">$9</span>
          <span className="text-gray-500">/mo</span>
        </Text>
        <Text className="mt-4">Unlimited Storage</Text>
        <Text>25GB Bandwidth</Text>
        <Text>10 Databases</Text>
        <Text>500 GB SSD Disk</Text>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </Card>
    </Container>
    </div>
    </div>
  );
}

export default PropertyDetail;
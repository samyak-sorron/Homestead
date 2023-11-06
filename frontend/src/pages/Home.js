import { Card, Navbar } from "../components"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { city  } from "../assets"
import { house1 } from "../assets"

export default function Home() {
  
  useEffect(() => {
    document.title='Homestead';
  }, [])

  const [propertyData, setPropertyData] = useState([])

  // const [id, setId] = useState(null)
  
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
      {propertyData && propertyData.map((listing,index)=>
        <div className="">
          <Link to={`/propertyDetails/${index}`}>
          <Card
            id={index}
            name={listing[index].name}
            prompt="2 dogs under the street light"
            photo={listing[index]}
          /></Link>
        </div>
      )}</div>
      <div className="">
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
  )
}
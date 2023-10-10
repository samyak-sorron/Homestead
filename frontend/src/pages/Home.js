import { Card, Navbar } from "../components"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { city  } from "../assets"

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
      <h1 className="text-4xl">Top Rated Property </h1>
      {propertyData && propertyData.map((arr,index)=>
        <div className="grid grid-rows-4 md:grid-row-3 sm:grid-row-2">
          <Link to={`/propertyDetails/${arr.id}`}><Card
            id={index}
            name={arr[index].name}
            prompt="2 dogs under the street light"
            photo={arr[index]}
          /></Link>
        </div>
      )}
    </div>
  )
}
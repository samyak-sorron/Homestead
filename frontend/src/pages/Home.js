import { Card, Navbar } from "../components"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { city  } from "../assets"

export default function Home() {
  
  useEffect(() => {
    document.title='Homestead';
  }, [])

  // const [id, setId] = useState(null)
  const element=(arr,index)=>arr.map(
    <div className="grid grid-rows-4 md:grid-row-3 sm:grid-row-2">
      <Link to=''><Card
        id={index}
        name={arr[index].name}
        prompt="2 dogs under the street light"
        photo={arr[index]}
      /></Link>
    </div>
    )

  return (
    <div>
      <Navbar/>
      <div className="w-full absolute z-20"><img src={city} alt="city" className="w-full h-[25rem] sm:h-[27rem] object-cover"/></div>
      <hr/>
      {element}
      
    </div>
  )
}
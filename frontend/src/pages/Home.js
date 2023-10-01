import { Card } from "../components"
import { useState } from 'react'
import { Link } from "react-router-dom"

export default function Home() {
  

  // const [id, setId] = useState(null)
  const element=(arr,index)=>arr.map(
    <div className="grid grid-rows-4 md:grid-row-3 sm:grid-row-2">
      <Link to='' ><Card
        id={index}
        name={arr[index].name}
        prompt="2 dogs under the street light"
        photo={arr[index]}
      /></Link>
    </div>
    )

  return (
    <div>
      <hr/>
      {element}
      
    </div>
  )
}
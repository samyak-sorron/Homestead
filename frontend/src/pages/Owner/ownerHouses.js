import React,{useState,useEffect} from 'react'
import { Card,Navbar, Sidebar } from '../../components'
import { Link } from "react-router-dom"
import { city ,house1  } from "../../assets/index.js"
const OwnerHouses = () => {
  useEffect(()=>{
    document.title="DashBoard";
  })

  const [propertyData, setPropertyData] = useState([])



  return (
    <div>
      <Navbar/>
      <div className='grid grid-cols-[max-content_1fr] gap-x-4'>
        <Sidebar/>
        
        <div className='text-3xl max-w-full'>
        <h2 className="text-2xl font-semibold align-middle mt-3" >Welcome to My Houses</h2>
        <br></br>
        <div className="App">
            
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
      </div>
    </div>
  )
}

export default OwnerHouses
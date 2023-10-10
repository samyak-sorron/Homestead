import React,{useEffect, useState} from 'react'
import {Navbar} from '../components'

const PropertyDetail = () => {
    useEffect(()=>{
        document.title='Property Details'
    })
  return (
    <div>
        <Navbar/>
        <div className='column-1 px-rm pt-18 container mx-auto md:columns-3 md:gap-8'>
           <img className='w-full h-auto object-cover rounded-xl columns-4 mb-8' src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='hehe'></img> 
           <div>
            <h1>Samyak</h1>
            <p>location</p>
           </div>
        </div>
    </div>
  )
}

export default PropertyDetail;
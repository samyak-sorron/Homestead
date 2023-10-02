import React,{useEffect, useState} from 'react'

const PropertyDetail = () => {
    useEffect(()=>{
        document.title='Property Details'
    })
  return (
    <div>
        <div className='flex'>
           <img className='w-6 h-6 object-cover rounded-xl columns-4' src='' alt=''></img> 
        </div>
    </div>
  )
}

export default PropertyDetail
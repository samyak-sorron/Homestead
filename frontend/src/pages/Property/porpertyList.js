import React from 'react'
import { Card } from '../../components'
import { house } from '../../assets'

const PorpertyList = () => {
  return (
    <div className='mx-auto max-w-screen-xl mt-20'>
        <Card
            _id={5}
            name='samyak'
            prompt={"hello"}
            photo={house}
        />
    </div>
  )
}

export default PorpertyList
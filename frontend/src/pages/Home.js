import { Card, Dropdown } from "../components"
import { useState } from 'react'

export default function Home() {

  // const [id, setId] = useState(null)

  return (
    <div>
      <nav className='flex justify-between p-5 align-middle'>
        <div>
          <h3>Homestead</h3>
        </div>
        <div  className='px-3'>
          <Dropdown
            logedin={false}
          />
        </div>
      </nav>
      <hr/>
      <Card
        id={1}
        name={'heck'}
        prompt="2 dogs under the street light"
        photo={null}
      />
    </div>
  )
}
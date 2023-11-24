import React from 'react';

const Card = ({ _id, name, prompt, photo }) => (
  <div className="max-w-[50vh] rounded-xl border group relative shadow-card hover:shadow-cardhover card">
    <img
      className="w-full h-auto rounded-xl mb-3 p-3"
      src={photo}
      alt={prompt}
    />
    <div className='p-3' class="text-lg">
      <div className='flex justify-between'>
        <div >location</div>
        <div className=''>rating</div>
      </div>
      <div>$5000/mo</div>
    </div>
  </div>
);

export default Card;
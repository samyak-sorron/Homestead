import React, {useState} from 'react'

const URL='http://localhost:8080/api/v1/property'
const AddProperty = () => {

  const ownerId = localStorage.getItem('ownerId')
  // if(!ownerId){
  //   setTimeout(() => {
  //     window.location.href = '/';
  //   }, 500);
  // }
  const [formData, setFormData] = useState({
    title:'',
    owner:ownerId,
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country:'',
    description:'',
    image:'',
    rent: '',
    rooms: '',
    bathrooms: '',
    leaseLength:'',
    dateAvailable:'',
    amenities: [],
  });

  
  
  const handleChange = (e) => {
      const {name,value} = e.target;
      setFormData({ ...formData, [name]: value });
  };
  
    const handleCheckboxChange=(e) => {
      const { name, checked } = e.target;
      if (checked) {
        setFormData({ ...formData, amenities: [...formData.amenities, name] });
      } else {
        setFormData({
          ...formData,
          amenities: formData.amenities.filter((item) => item !== name),
        });
      }
    };

    const handleFileChange=(event)=>{
      setFormData({
          ...formData,
          [event.target.name]:event.target.files[0]
      });
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const response = await fetch(URL + '/add-house', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('House added successfully');
        setFormData({
          title:'',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          country:'',
          description:'',
          image:'',
          rent: '',
          rooms: '',
          bathrooms: '',
          leaseLength:'',
          dateAvailable:'',
          amenities: [],
        });
      } else {
        alert('Error adding house');
      }
    };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-screen-xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-2 gap-5 mt-16">
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Title
        </label>
        <input
          className="border-b-2 px-10 border-red-500 focus:border-red-600 focus:outline-none text-gray-700 leading-tight"
          id="address"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Address
        </label>
        <input
          className="border-b-2 px-10 border-red-500 focus:border-red-600 focus:outline-none text-gray-700 leading-tight"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          City
        </label>
        <input
          className="border-b-2 px-10 border-red-500 focus:border-red-600 focus:outline-none text-gray-700 leading-tight"
          id="address"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          State
        </label>
        <input
          className="border-b-2 px-10 border-red-500 focus:border-red-600 focus:outline-none text-gray-700 leading-tight"
          id="address"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Zip Code
        </label>
        <input
          className="border-b-2 px-10 border-red-500 focus:border-red-600 focus:outline-none text-gray-700 leading-tight"
          id="address"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Country  
        </label>
        <input
          className="border-b-2 px-10 border-red-500 focus:border-red-600 focus:outline-none text-gray-700 leading-tight"
          id="address"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Property description
        </label>
        <textarea
          className="shadow border-b-2 rounded w-full py-5 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
          id="address"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-6">
      <label htmlFor="Property-Image" className="block text-gray-700 text-sm font-bold mb-2">Featured Image</label>
      <div className="">
          <input type="file"  onChange={handleFileChange}  name='image' id="property_image" className="" />
      </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Rooms
        </label>
        <input
          className="border-b-2 px-10 border-red-500 focus:border-red-600 focus:outline-none text-gray-700 leading-tight"
          id="address"
          name="rooms"
          value={formData.rooms}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Bathrooms
        </label>
        <input
          className="border-b-2 px-10 border-red-500 focus:border-red-600 focus:outline-none text-gray-700 leading-tight"
          id="address"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          required
        />
      </div>

      {/* ... repeat for other form fields like city, state, zipCode, rent, rooms, bathrooms ... */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amenities">
          Amenities
        </label>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              name="Wi-Fi"
              checked={formData.amenities.includes('Wi-Fi')}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2">Wi-Fi</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              name="Parking"
              checked={formData.amenities.includes('Parking')}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2">Parking</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              name="Pets"
              checked={formData.amenities.includes('Pets')}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2">Pets</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              name="Wi-Fi"
              checked={formData.amenities.includes('Wi-Fi')}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2">Wi-Fi</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              name="Wi-Fi"
              checked={formData.amenities.includes('Wi-Fi')}
              onChange={handleCheckboxChange}
            />
            <span className="ml-2">Wi-Fi</span>
          </label>
          {/* ... repeat for other amenities ... */}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add House
        </button>
      </div>
    </form>
  );
}

export default AddProperty
import React, {useState} from 'react'

const AddProperty = () => {
    const [formData, setFormData] = useState({
        address: '',
        city: '',
        state: '',
        zipCode: '',
        rent: '',
        rooms: '',
        bathrooms: '',
        amenities: [],
    });
    
     const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
     };
    
     const handleCheckboxChange = (e) => {
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
    
     const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/add-house', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          alert('House added successfully');
          setFormData({
            address: '',
            city: '',
            state: '',
            zipCode: '',
            rent: '',
            rooms: '',
            bathrooms: '',
            amenities: [],
          });
        } else {
          alert('Error adding house');
        }
     };
    
     return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              City
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              State
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Zip Code
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Rooms
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              name="rooms"
              value={formData.rooms}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Bathrooms
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              required
            />
          </div>

          {/* ... repeat for other form fields like city, state, zipCode, rent, rooms, bathrooms ... */}
          <div className="mb-4">
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
                  name="Wi-Fi"
                  checked={formData.amenities.includes('Parking')}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2">Parking</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  name="Wi-Fi"
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
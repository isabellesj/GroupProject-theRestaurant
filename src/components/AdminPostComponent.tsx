import React, { useState } from 'react';
import axios from 'axios';
import '../scss/adminAdd.scss'

const AdminPostComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    restaurantId: "65c60cd512ebb6ed53265ac4",
    date: "",
    time: "",
    numberOfGuests: "",
    customer: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
    }
  });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCustomerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      customer: {
        ...formData.customer,
        [name]: value
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://school-restaurant-api.azurewebsites.net/booking/create', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className='AdminAddContainer'>
      <button onClick={toggleForm}>Lägg till en bokning</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <label> Namn:
              <input
                type="text"
                name="name"
                value={formData.customer.name}
                onChange={handleCustomerChange}
              />
            </label>
          </div>
          <div>
            <label> Efternamn:
              <input
                type="text"
                name="lastname"
                value={formData.customer.lastname}
                onChange={handleCustomerChange}
              />
            </label>
          </div>
          <div>
            <label> E-post:
              <input
                type="email"
                name="email"
                value={formData.customer.email}
                onChange={handleCustomerChange}
              />
            </label>
          </div>
          <div>
            <label> Telefon:
              <input
                type="tel"
                name="phone"
                value={formData.customer.phone}
                onChange={handleCustomerChange}
              />
            </label>
          </div>
          <div>
            <label> Datum:
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label> Tid:
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label> Antal gäster:
              <input
                type="number"
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">Skicka</button>
        </form>
      )}
    </div>
  );
};

export default AdminPostComponent;
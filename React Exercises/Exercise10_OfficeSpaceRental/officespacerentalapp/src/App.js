import React from 'react';

const offices = [
  {
    id: 1,
    name: 'Prestige Tech Park',
    rent: 55000,
    address: 'Outer Ring Road, Bangalore',
    image: 'https://via.placeholder.com/300x150?text=Office+1'
  },
  {
    id: 2,
    name: 'DLF Cyber City',
    rent: 75000,
    address: 'DLF Phase 2, Gurgaon',
    image: 'https://via.placeholder.com/300x150?text=Office+2'
  },
  {
    id: 3,
    name: 'Hiranandani Estate',
    rent: 48000,
    address: 'Powai, Mumbai',
    image: 'https://via.placeholder.com/300x150?text=Office+3'
  },
  {
    id: 4,
    name: 'Tidel Park',
    rent: 82000,
    address: 'Taramani, Chennai',
    image: 'https://via.placeholder.com/300x150?text=Office+4'
  }
];

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Office Space Rental App</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {offices.map(office => (
          <div key={office.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '300px' }}>
            <img src={office.image} alt={office.name} style={{ width: '100%', borderRadius: '4px' }} />
            <h3>{office.name}</h3>
            <p><strong>Address:</strong> {office.address}</p>
            <p>
              <strong>Rent: </strong>
              <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
                ₹{office.rent}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

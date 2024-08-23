// src/App.js
import React, { useState } from 'react';
import MentorList from './Components/MentorList';
import BookingForm from './Components/BookingForm';
import './App.css';

function App() {
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [selectedMentor, setSelectedMentor] = useState(null);

  const handleAreaOfInterestChange = (e) => {
    setAreaOfInterest(e.target.value);
  };

  return (
    <div className="App">
      <h1>Mentor Booking App</h1>
      <div>
        <label>Select Area of Interest:</label>
        <input
          type="text"
          value={areaOfInterest}
          onChange={handleAreaOfInterestChange}
        />
      </div>
      <MentorList
        areaOfInterest={areaOfInterest}
        onSelectMentor={(mentor) => setSelectedMentor(mentor)}
      />
      {selectedMentor && <BookingForm selectedMentor={selectedMentor} />}
    </div>
  );
}

export default App;

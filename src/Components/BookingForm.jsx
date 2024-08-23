// src/components/BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ selectedMentor }) => {
  const [duration, setDuration] = useState(30); // Default to 30 minutes
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const bookingData = {
      mentorId: selectedMentor.id,
      duration,
      areaOfInterest,
    };

    try {
      const response = await fetch('/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setConfirmation('Booking confirmed!');
      } else {
        setConfirmation('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error booking session:', error);
      setConfirmation('Booking failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Book a Session with {selectedMentor.name}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Duration (minutes):</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div>
          <label>Area of Interest:</label>
          <input
            type="text"
            value={areaOfInterest}
            onChange={(e) => setAreaOfInterest(e.target.value)}
          />
        </div>
        <button type="submit">Book Session</button>
      </form>
      {confirmation && <p>{confirmation}</p>}
    </div>
  );
};

export default BookingForm;

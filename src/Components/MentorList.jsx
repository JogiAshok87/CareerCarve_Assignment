// src/components/MentorList.js
import React, { useState, useEffect } from 'react';

const MentorList = ({ areaOfInterest, onSelectMentor }) => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    // Fetch mentors based on the area of interest
    const fetchMentors = async () => {
      try {
        const response = await fetch(`/mentors?area_of_expertise=${areaOfInterest}`);
        const data = await response.json();
        setMentors(data);
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };

    if (areaOfInterest) {
      fetchMentors();
    }
  }, [areaOfInterest]);

  return (
    <div>
      <h2>Available Mentors</h2>
      <ul>
        {mentors.map((mentor) => (
          <li key={mentor.id} onClick={() => onSelectMentor(mentor)}>
            {mentor.name} - {mentor.areas_of_expertise.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorList;

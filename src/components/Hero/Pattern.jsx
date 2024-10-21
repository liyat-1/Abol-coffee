/* eslint-disable no-unused-vars */
// src/components/Pattern.js
import React from 'react';
import image1 from '../../assets/side.png'; 
import image2 from '../../assets/side2.png';

const Pattern = () => {
  return (
    <div
      className="pattern-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {/* Top Image */}
      <div
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          width: '10%',
          height: '50%', // Adjust height as needed
          boxShadow: '4px 8px 16px rgba(0, 0, 0, 0.3)', // Optional shadow for effect
        }}
      ></div>

      {/* Bottom Image */}
      <div
        style={{
          backgroundImage: `url(${image2})`,
          backgroundSize: 'cover',
          width: '10%',
          height: '50%', // Adjust height as needed
          boxShadow: '4px 8px 16px rgba(0, 0, 0, 0.3)', // Optional shadow for effect
        }}
      ></div>
    </div>
  );
};

export default Pattern;

/* eslint-disable no-unused-vars */
// src/components/Pattern.js
import React from 'react';
import image1 from '../../assets/image1.jfif'; 
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';

const Pattern = () => {
  return (
    <div
      className="pattern-container"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 120px)',
        gridTemplateRows: 'repeat(10, 120px)',
        gap: '3px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {/* ROW 1 */}
      <div
        className="circle"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          borderRadius: '50%',
          width: '80px',
          height: '80px',
          boxShadow: '4px 8px 16px rgba(0, 0, 0, 0.3)',  // Darker shadow
          border: '1px dashed #ddd',  // Light-colored dashed border
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease', 
          marginLeft: '1em'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      ></div>
      <div></div>
      <div></div>

      {/* ROW 2 */}
      <div
        className="small-circle"
        style={{
          backgroundImage: `url(${image3})`,
          backgroundSize: 'cover',
          borderRadius: '50%',
          width: '35px',
          height: '35px',
          boxShadow: '4px 8px 16px rgba(0, 0, 0, 0.3)',
          border: '1px dashed #ddd',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          marginBottom: '9.5em',
          marginLeft: '2em'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.2)';
          e.currentTarget.style.borderColor = '#ffab00';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.borderColor = '#ddd';
        }}
      ></div>
      <div></div>
      <div></div>

      {/* ROW 3 */}
      <div
        className="diamond"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundSize: 'cover',
          transform: 'rotate(45deg)',
          width: '80px',
          height: '80px',
          boxShadow: '4px 8px 16px rgba(0, 0, 0, 0.3)',
          border: '1px dashed #ddd',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          marginBottom: '17.5em',
          marginLeft: '1em'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(45deg)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(45deg)'}
      ></div>
      <div></div>
      <div></div>

      {/* ROW 4 */}
      <div
        className="small-circle"
        style={{
          backgroundImage: `url(${image3})`,
          backgroundSize: 'cover',
          borderRadius: '50%',
          width: '35px',
          height: '35px',
          boxShadow: '4px 8px 16px rgba(0, 0, 0, 0.3)',
          border: '1px dashed #ddd',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          marginLeft: '2em',
          marginBottom: '25.5em',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.2)';
          e.currentTarget.style.borderColor = '#ffab00';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.borderColor = '#ddd';
        }}
      ></div>
      <div></div>
      <div></div>

      {/* ROW 5 */}
      <div
        className="polygon"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
          width: '50px',
          height: '50px',
          boxShadow: '4px 8px 16px rgba(0, 0, 0, 0.3)',
          border: '1px dashed #ddd',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          marginBottom: '36.8em',
          marginLeft: '1.7em'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      ></div>
      <div
        className="circle"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          borderRadius: '50%',
          width: '80px',
          height: '80px',
          boxShadow: '4px 8px 16px rgba(0, 0, 0, 0.3)',
          border: '1px dashed #ddd',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          marginBottom: '42em',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      ></div>
      <div></div>

      {/* ROW 6 */}
      <div
        className="circle"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          borderRadius: '50%',
          width: '80px',
          height: '80px',
          boxShadow: '4px 8px 16px rgba(0, 0, 0, 0.3)',
          border: '1px dashed #ddd',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          marginBottom: '46em',
          marginLeft: '1em'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      ></div>
      <div
        className="small-circle"
        style={{
          backgroundImage: `url(${image3})`,
          backgroundSize: 'cover',
          borderRadius: '50%',
          width: '35px',
          height: '35px',
          boxShadow: '4px 8px 16px rgba(0, 0, 0, 0.3)',
          border: '1px dashed #ddd',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          marginBottom: '51.5em',
          marginLeft: '1em'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.2)';
          e.currentTarget.style.borderColor = '#ffab00';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.borderColor = '#ddd';
        }}
      ></div>
      <div
        className="polygon"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
          width: '60px',
          height: '60px',
          boxShadow: '4px 8px 16px rgba(0, 0, 0, 0.3)',
          border: '1px dashed #ddd',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          marginBottom: '54em',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      ></div>



















      {/* Continue similarly for the remaining rows */}
      <div
        className="small-circle"
        style={{
          backgroundImage: `url(${image3})`,
          backgroundSize: 'cover',
          borderRadius: '50%',
          width: '25px',
          height: '25px',
          boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom:"55.5em",
           marginLeft:"2em"
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
            e.currentTarget.style.borderColor = '#ffab00';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = '#ddd';
          }}
      ></div>
      <div
        className="diamond"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundSize: 'cover',
          transform: 'rotate(45deg)',
          width: '60px',
          height: '60px',
          boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
           marginBottom:"59.5em",
           marginLeft:"0em"
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(45deg)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(45deg)'}
      
      ></div>
      <div
        className="small-circle"
        style={{
          backgroundImage: `url(${image3})`,
          backgroundSize: 'cover',
          borderRadius: '50%',
          width: '25px',
          height: '25px',
          boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom:"54.5em",
         
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
            e.currentTarget.style.borderColor = '#ffab00';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = '#ddd';
          }}
      ></div>





       {/* ROW 8 */}
       <div
        className="polygon"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
          width: '35px',
          height: '35px',
          boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom:"66.5em",
          marginLeft:"1.7em"
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      ></div>
      <div
        className="small-circle"
        style={{
          backgroundImage: `url(${image3})`,
          backgroundSize: 'cover',
          borderRadius: '50%',
          width: '25px',
          height: '25px',
          boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom:"67.5em",
          marginLeft:"1em"
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
            e.currentTarget.style.borderColor = '#ffab00';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = '#ddd';
          }}
      ></div>
      <div
        className="polygon"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
          width: '35px',
          height: '35px',
          boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
          marginLeft:"-0.3em",
          marginBottom:"65.5em"

        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      
      ></div>





      {/* ROW 9 */}
      <div
        className="small-circle"
        style={{
          backgroundImage: `url(${image3})`,
          backgroundSize: 'cover',
          borderRadius: '50%',
          width: '25px',
          height: '25px',
          boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom:"77.5em",
          marginLeft:"2em"
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
            e.currentTarget.style.borderColor = '#ffab00';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = '#ddd';
          }}
      ></div>
      <div
        className="polygon"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
          width: '35px',
          height: '35px',
          boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom:"78.8em",
          marginLeft:"0.7em"
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      
      ></div>
      <div
        className="small-circle"
        style={{
          backgroundImage: `url(${image3})`,
          backgroundSize: 'cover',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
           marginBottom:"76.8em",
          marginLeft:"0.2em"
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
            e.currentTarget.style.borderColor = '#ffab00';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = '#ddd';
          }}
      ></div>












      {/* ROW 10 */}
      <div
        className="small-circle"
        style={{
          backgroundImage: `url(${image3})`,
          backgroundSize: 'cover',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom:"89.5em",
          marginLeft:"2.2em"
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
            e.currentTarget.style.borderColor = '#ffab00';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = '#ddd';
          }}
      ></div>
      <div
        className="circle"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          borderRadius: '50%',
          width: '60px',   
          height: '60px',  
          boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
          marginBottom:"88em",
            
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.2)';
            e.currentTarget.style.borderColor = '#ffab00';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = '#ddd';
          }}
      ></div>
       <div
        className="diamond"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundSize: 'cover',
          transform: 'rotate(45deg)',
          width: '60px',
          height: '60px',
          boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
           marginBottom:"84.5em",
           marginLeft:"-1em"
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(45deg)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(45deg)'}
      
      ></div>















    </div>
  );
};

export default Pattern;

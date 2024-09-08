
// src/components/LightEffect.js
import React, { useEffect, useRef } from 'react';
import '../LightEffect/LightEffect.css'; // Import the CSS for the light effect

const LightEffect = () => {
  const lightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (lightRef.current) {
        const { clientX, clientY } = event;
        lightRef.current.style.left = `${clientX}px`;
        lightRef.current.style.top = `${clientY}px`;
      }
    };

    // Add the mouse move event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className='light' ref={lightRef}></div>;
};

export default LightEffect;

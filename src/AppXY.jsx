import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  return (
    <div
      className='container'
      onPointerMove={(e) => {
        console.log(e.clientX, e.clientY);
        setMouseX(e.clientX);
        setMouseY(e.clientY);
      }}
    >
      <div
        className='pointer'
        style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
      />
    </div>
  );
}

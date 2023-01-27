import React from 'react';

export default function Avatar({ badge, image }) {
  return (
    <div className='avatar'>
      {badge && <div className='badge'>New</div>}
      <img className='photo' src={image} alt='avatar' />
    </div>
  );
}

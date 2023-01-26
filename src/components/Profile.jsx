import React from 'react';

export default function Profile({ image, name, title, badge }) {
  return (
    <div className='profile'>
      {badge && <div className='badge'>New</div>}
      <img className='photo' src={image} alt='avatar' />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

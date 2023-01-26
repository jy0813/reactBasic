import React from 'react';
import Avatar from './Avatar';

export default function Profile({ image, name, title, badge }) {
  return (
    <div className='profile'>
      <Avatar image={image} badge={badge} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

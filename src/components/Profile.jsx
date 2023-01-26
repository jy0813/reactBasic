import React from 'react';

export default function Profile() {
  return (
    <div className='profile'>
      <img
        className='photo'
        src='https://images.unsplash.com/photo-1674641672189-f3de2f2cfc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        alt='avatar'
      />
      <h1>James Kim</h1>
      <p>Frontend Engineer</p>
    </div>
  );
}

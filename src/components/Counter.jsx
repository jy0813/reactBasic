import React from 'react';

export default function Counter({ count, setCount, total }) {
  const onIncrease = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className='counter'>
      <span className='number'>
        {count} / {total}
      </span>
      <button className='button' onClick={onIncrease}>
        Add +
      </button>
    </div>
  );
}

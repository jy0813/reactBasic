import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function AppCounter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const AllCount = (count) => {
    setCount(count);
  };

  const AllCount2 = (count2) => {
    setCount2(count2);
  };

  return (
    <div className='container'>
      <div className='banner'>
        Total Count : {count + count2} {count + count2 > 10 ? '🔥' : '❄'}
      </div>
      <div className='counters'>
        <Counter count={count} setCount={AllCount} total={count + count2} />
        <Counter count={count2} setCount={AllCount2} total={count + count2} />
      </div>
    </div>
  );
}

export default AppCounter;

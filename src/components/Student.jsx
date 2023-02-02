import React from 'react';

function Student({name, dispatch, id, isHere}) {
  return (
      <div>
        <span style={{
          textDecoration: isHere ? 'line-through' : 'none',
          color: isHere ? 'gray' : 'black'
        }} onClick={() => {
          dispatch({type:'check', payload:{id}})
        }}>{name}</span>
        <button onClick={() => {
          dispatch({type:'delete', payload:{id}})
        }
        }>삭제</button>
      </div>
  );
}

export default Student;
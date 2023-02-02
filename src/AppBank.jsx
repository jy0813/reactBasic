import React, { useState, useReducer } from 'react';

const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw:'withdraw'
}
const reducer = (state, action) => {
  console.log("action", state, action);

  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};
function AppBank() {
  const [number, setNumber] = useState(0);
  // useReducer는 2가지 인자를 받음. useReducer(업데이트 역할, 초기값)
  const [money, dispatch] = useReducer(reducer, 0);
  const handleNumber = (e) => {
    setNumber(parseInt(e.target.value));
  };
  return (
      <div className="App">
        <h2>UseReducer 은행</h2>
        <p>잔고: {money}원</p>
        <input type="number" step="1000" value={number} onChange={handleNumber} />
        <button
            onClick={() => {
              //action은 Object 형태로 보내고 Type을 넣어줌.
              dispatch({ type: ACTION_TYPES.deposit, payload: number });
            }}
        >
          예금
        </button>
        <button onClick={() => {
          dispatch({ type: ACTION_TYPES.withdraw, payload: number });
        }}>출금</button>
      </div>
  );
}

export default AppBank;
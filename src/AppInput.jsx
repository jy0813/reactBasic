import React from 'react';
import useInput from "./hooks/use-input";

const displayMessage = (message) => {
  alert(message);
}

function AppInput(props) {
  const [inputValue, handleChange, handleSubmit, inputRef] = useInput('', displayMessage);
  return (
      <div>
        <h1>useInput</h1>
        <input ref={inputRef} value={inputValue} onChange={handleChange}/>
        <button onClick={handleSubmit}>확인</button>
      </div>
  );
}

export default AppInput;
import React, {useState, useRef, useEffect} from 'react';

function useInput(initialValue, submitAction) {
  const [inputValue, setInputValue] = useState(initialValue);
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus();
  },[])
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = () => {
    setInputValue('');
    inputRef.current.focus();
    submitAction(inputValue);
  }
  return [inputValue, handleChange, handleSubmit, inputRef]
}

export default useInput;
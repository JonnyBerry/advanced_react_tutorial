//import { useState } from 'core-js/library/es6/symbol';
import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
  name:'jonathan',
  age:24,
  message:'random message',
});
const [name,setName] = useState('peter')
const [age,setAge] = useState('24')
const [message,setmessage] = useState('random message')
const changeMessage = () =>{
  //setPerson ({ ...person, message:'hello world'});
  setmessage('hello world');
};

  return (
  <>
  <h3>{name}</h3>
  <h3>{age}</h3>
  <h3>{message}</h3>
  <button className='btn' onClick={changeMessage}>
  change message
  </button>

  </>
  );
};

export default UseStateObject;

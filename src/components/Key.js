import React from 'react';

const Key = ({ id , number, pressKey}) => (
  <button className="btn col m4 s4 l4" onClick={() => pressKey(number)} value={number}>{number}</button>
)

export default Key

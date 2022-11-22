import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchRockets } from '../../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  return (
  
  <div>
    <h1>This is the rockets page</h1>
    <button onClick={() => dispatch(fetchRockets())}>Click to log out data</button>
  </div>
);
}

export default Rockets;

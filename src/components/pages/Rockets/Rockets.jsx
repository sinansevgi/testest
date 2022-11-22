/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable */

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../../redux/rockets/rockets';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "./Rocket.css"
import { v4 as uuidv4 } from 'uuid';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  const dataFetchedRef = useRef(false);
  useEffect(() => {
    if (dataFetchedRef.current){ return }
    else{
      dataFetchedRef.current = true;
      dispatch(fetchRockets());
  }
}, [rockets])
  return (
    <Container fluid className="container">
      <h1>This is the rockets page</h1>
      {rockets.map(element => {
      return( 
      <Row key={uuidv4()}>
        <Col xs={3} className="eachbox"><Image fluid src={element.flickr_images[0]} alt= {element.flickr_images[0]}/></Col>
        <Col className="eachbox">
          <h1>{element.name}</h1>
          <p>{element.description}</p>
          <button type="button">Reserve Rocket</button>
        </Col>
      </Row>
      )
      })}
      
    </Container>
  );
};

export default Rockets;

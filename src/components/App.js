import React from 'react';
import ProfileCard from "./ProfileCard";
import MessageColumn from "./MessageColumn";
import PetList from "./PetList";
import NavBar from "./NavBar";
import './../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

function App() {
  
  return (
    <React.Fragment>
      <Container>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <Col md={4}>
            <ProfileCard/>
          </Col>
          <Col md={4}>
            <PetList/>
          </Col>          
          <Col md={4}>
            <MessageColumn />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
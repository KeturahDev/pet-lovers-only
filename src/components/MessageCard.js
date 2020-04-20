import React from "react";
import MessagePhoto from './MessagePhoto';
import MessageName from './MessageName';
import MessageBody from './MessageBody';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

function MessageCard(props){
  const messageStyles = {
    padding: '3%'
  }

  return(
    <React.Fragment>
      <div style={messageStyles}>
        {/* <Card> */}
        <Container>
          <Row>
            <Col>
            <MessagePhoto photo={props.photo}/>
            </Col>
            <Col>
              <MessageName name={props.name}/>
              <MessageBody body={props.body}/>
            </Col>
            <Col>
              <Button variant="primary">This is the one!</Button>
            </Col>
          </Row>
        </Container>
        {/* </Card> */}
        <hr />
      </div>
    </React.Fragment>
  );
}

export default MessageCard;
import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import ProfileName from "./ProfileName";
import ProfileHeadline from "./ProfileHeadline";
import ProfileDescription from "./ProfileDescription";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

function ProfileCard() {
  const lorem = "Been a tiger momma for 29 years and proud of it! I bet my nine lives on you-oooo-ooo-hooo. stare at owner accusingly then wink, yet allways wanting food. Stare out the window rub my belly hiss scratch the box. Toy mouse squeak roll over trip on catnip and chase the pig around the house or i like fish, immediately regret falling into bathtub. Be superior walk on keyboard meowing non stop for food. Hate dog chase mice, so sleep yet paw at beetle and eat it before it gets away but sleep nap yet chase laser."

  const profileStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    border: '2px solid red',
    padding: '3%',
    text: 'center',
    textAlign: 'center'
  }
  const centerPhoto = {
    textAlign: 'center'
  }
      return (
    <React.Fragment>
      <div style={profileStyles}>
      <Container >
        <Row>
          <Col>
            <div style={centerPhoto}>
              <ProfilePhoto style={{width: '90%'}} photo="https://www.abc.net.au/news/image/10693098-3x2-940x627.jpg"/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ProfileName name="Jordan"/>
          </Col>
          <Col md={6}>
            <ProfileHeadline headline="Tiger queen"/>
          </Col>
        </Row>
        <Row>
          <ProfileDescription description={lorem}/>       
        </Row>
      </Container>
      </div>

    </React.Fragment>
  );
}

export default ProfileCard;
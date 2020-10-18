import React from "react";
import Media from "react-media";
import { UserConsumer } from "../providers/UserProvider";
import { Container, Row, Col } from "react-bootstrap";
import UserInfo from "./UserProfile/UserInfo";
import Tattoos from "./UserProfile/Tattoos";
import Contact from "./UserProfile/Contact";
import About from "./UserProfile/About";
import InterestCard from "./UserProfile/InterestCard";
import DetailCard from "./UserProfile/DetailCard";

// Testing out a way to do media queries inside of react with react-media instead of using css media queries or a complex grid
// I'd prefer to do this with straight CSS next time, this is too much to handle when it could have been much simplier in fewer lines of code
// Especially with this layout, even running components of rows and columns, seems too tedious, next time go for something more managable

const UserProfile = () => {
  return (
    <Media
      queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 1199px)",
        large: "(min-width: 1200px)",
      }}
    >
      {(matches) => (
        <>
          {matches.small && (
            <UserConsumer>
              {(value) => (
                <div className="small-container">
                  <Row>
                    <UserInfo />
                  </Row>
                  <Row>
                    <Tattoos />
                  </Row>
                  <Row>
                    <Col>
                      <About />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Contact />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InterestCard />
                    </Col>
                    <Col>
                      <DetailCard />
                    </Col>
                  </Row>
                </div>
              )}
            </UserConsumer>
          )}

          {matches.medium && (
            <UserConsumer>
              {(value) => (
                <Container>
                  <Row>
                    <UserInfo />
                  </Row>
                  <Row>
                    <Tattoos />
                  </Row>
                  <Row>
                    <Col>
                      <About />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Contact />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <InterestCard />
                    </Col>
                    <Col>
                      <DetailCard />
                    </Col>
                  </Row>
                </Container>
              )}
            </UserConsumer>
          )}

          {matches.large && (
            <UserConsumer>
              {(value) => (
                <Container>
                  <Row>
                    <UserInfo />
                  </Row>
                  <Row>
                    <Col>
                      <InterestCard />
                      <DetailCard />
                      <Contact />
                    </Col>
                    <Col>
                      <About />
                    </Col>
                  </Row>
                  <Row>
                    <Tattoos />
                  </Row>
                </Container>
              )}
            </UserConsumer>
          )}
        </>
      )}
    </Media>
  );
};

export default UserProfile;

import React, { Fragment } from "react";
import Media from "react-media";
import { UserConsumer } from "../providers/UserProvider";
import { Container, Row, Col } from "react-bootstrap";
import UserInfo from "./UserProfile/UserInfo";
import Tattoos from "./UserProfile/Tattoos";
import Contact from "./UserProfile/Contact";
import About from "./UserProfile/About";
import InterestCard from "./UserProfile/InterestCard";
import DetailCard from "./UserProfile/DetailCard";

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <Media
          queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)",
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small && (
                <UserConsumer>
                  {(value) => (
                    <Fragment>
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
                    </Fragment>
                  )}
                </UserConsumer>
              )}

              {matches.medium && (
                <UserConsumer>
                  {(value) => (
                    <Fragment>
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
                    </Fragment>
                  )}
                </UserConsumer>
              )}

              {matches.large && (
                <UserConsumer>
                  {(value) => (
                    <Fragment>
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
                            <Tattoos />
                          </Col>
                        </Row>
                      </Container>
                    </Fragment>
                  )}
                </UserConsumer>
              )}
            </Fragment>
          )}
        </Media>
      </div>
    );
  }
}

export default UserProfile;

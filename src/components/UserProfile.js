import React from "react";
import Media from "react-media";
import { UserConsumer } from "../providers/UserProvider";
import { Container, Row, Col } from "react-bootstrap";
import UserInfo from "./UserProfile/UserInfo";
import Tattoos from "./UserProfile/Tattoos";
import Contact from "./UserProfile/Contact";
import Blurbs from "./UserProfile/Blurbs";
import InterestCard from "./UserProfile/InterestCard";
import DetailCard from "./UserProfile/DetailCard";

const UserProfile = () => {
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
          <>
            {matches.small && (
              <UserConsumer>
                {(value) => (
                  <>
                    <Container>
                      <Row>
                        <UserInfo />
                      </Row>

                      <Row>
                        <Tattoos />
                      </Row>

                      <Row>
                        <Col>
                          <Blurbs />
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
                  </>
                )}
              </UserConsumer>
            )}

            {matches.medium && (
              <UserConsumer>
                {(value) => (
                  <>
                    <Container>
                      <Row>
                        <UserInfo />
                      </Row>

                      <Row>
                        <Tattoos />
                      </Row>

                      <Row>
                        <Col>
                          <Blurbs />
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
                  </>
                )}
              </UserConsumer>
            )}

            {matches.large && (
              <UserConsumer>
                {(value) => (
                  <>
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
                          <Blurbs />
                        </Col>
                      </Row>
                      <Row>
                        <Tattoos />
                      </Row>
                    </Container>
                  </>
                )}
              </UserConsumer>
            )}
          </>
        )}
      </Media>
    </div>
  );
};

export default UserProfile;

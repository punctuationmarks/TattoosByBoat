import React from "react";
import { UserConsumer } from '../providers/UserProvider';
import { Container, Row, Col } from "react-bootstrap";
import UserInfo from "./UserProfile/UserInfo";
import BlogPreview from "./UserProfile/BlogPreview";
import Tattoos from "./UserProfile/Tattoos";
import Contact from "./UserProfile/Contact";
import Blurbs from "./UserProfile/Blurbs";
import InterestDetailCards from "./UserProfile/InterestDetailCards";

const UserProfile = () => (
  <UserConsumer>
    {value => (
      <>
        <Container>
          <Row>
            <UserInfo></UserInfo>
            {/* <BlogPreview></BlogPreview> */}
          </Row>

          <Row>

            <Col>
              <InterestDetailCards></InterestDetailCards>
              <Contact></Contact>
            </Col>

            <Col>
              <Blurbs></Blurbs>
              <Tattoos></Tattoos>
            </Col>
          </Row>

        </Container>
      </>
    )}
  </UserConsumer>
)

export default UserProfile;

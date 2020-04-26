import React from "react";
import { UserConsumer } from '../../providers/UserProvider';
import { Card, Image, Container, Row, Col, Table } from "react-bootstrap";
import BlogPreview from "./BlogPreview";
import Tattoos from "./Tattoos";
import Contact from "./Contact";
import Blurbs from "./Blurbs";
import InterestDetailCards from "./InterestDetailCards";

const User = () => (
  <UserConsumer>
    {value => (
      <>
        <Container>
          <Row>
            <Col>
              <div style={{ width: "30%", marginLeft: 0, }}>
                <br />
                <h3>{value.username}</h3>
                <br />
                <Image style={{ width: "210px", height: "200px" }} src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/Older/profile_pics/default.jpg?raw=true" alt="avatar" />
              </div>
              <br />
              <p style={{ paddingBottom: '5px' }}> View My: <a href='/'>Pics</a> | <a href='/'>Videos</a></p>
            </Col>
            <Col style={{ fontSize: "16px", paddingLeft: "1px" }}>
              <br />
              <br />
              <br />
              <p>"{value.bio}"</p>
              <p style={{ marginBottom: 0 }}>{value.gender}</p>
              <p style={{ marginBottom: 0 }}>{value.city},</p>
              <p style={{ marginBottom: 0 }}>{value.state}</p>
              <p>{value.country}</p>
              <br />
              <br />
              <br />
              <br />
              <p style={{ marginBottom: 0 }}>Last Login: </p>
              <p>{value.lastLogin} </p>
            </Col>
            <BlogPreview></BlogPreview>
          </Row>

          <Row>
            <Col>
        <InterestDetailCards></InterestDetailCards>
        
            </Col>

            <Col> 
              <Blurbs></Blurbs>
              <strong>

                <Tattoos></Tattoos>
                
              </strong>
            </Col>
          </Row>
        </Container>
      </>
    )}
  </UserConsumer>
)

export default User;
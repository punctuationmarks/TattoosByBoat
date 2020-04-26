import React from "react";
import { UserConsumer } from '../../providers/UserProvider';
import { Image, Col, Row } from "react-bootstrap";

const UserInfo = () => (
  <UserConsumer>
    {value => (
      <>
  
    <Col>
              <div style={{ width: "30%", marginLeft: 0, }}>
                <br />
                <h3>{value.username}</h3>
                <br />
                <Image src="https://github.com/punctuationmarks/ImageStorage/blob/master/TattoosByBoat/Older/profile_pics/default.jpg?raw=true" alt="avatar" />
              </div>
              <br />
              <p style={{ paddingBottom: '5px' }}> View My: <a href='/'>Pics</a> | <a href='/'>Videos</a></p>
            </Col>
            
            <Col style={{ fontSize: "16px", paddingLeft: "1px" }}>
              <br />
              <br />
              <br />
              <p>"{value.bio}"</p>
              <p style={{ marginBottom: 0 }}>{value.city},</p>
              <p style={{ marginBottom: 0 }}>{value.state}</p>
              <p>{value.country}</p>
              <br />
              <br />
            </Col>

      <Row>
      <div className="extendedNetwork">
            { value.username} is in your extended network
          </div>
      </Row>

            </>
    )}
  </UserConsumer>
)

export default UserInfo;
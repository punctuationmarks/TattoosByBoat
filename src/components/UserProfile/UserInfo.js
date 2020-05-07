import React from "react";
import { UserConsumer } from '../../providers/UserProvider';
import { Image, Col, Row } from "react-bootstrap";

const UserInfo = () => (
  <UserConsumer>
    {value => (
      <>

        <Col>
          <div className="bioDiv">
            <br />
            <h3>{value.username}</h3>
            <br />
            <Image src={value.profile_image} alt="profile image"/>
           </div>
          <br />
          <p>
            View My:
            </p>
          <p>
            <a href={value.instagram} target="_blank" rel="noopener noreferrer">
              Insta</a> |
           <a href={value.shop_website} target="_blank" rel="noopener noreferrer">
              Shop</a> |
           <a href={value.shop_instagram} target="_blank" rel="noopener noreferrer">
              Shop's Insta</a>
          </p>
        </Col>

        <Col style={{ fontSize: "16px", paddingLeft: "1px" }}>
          <br />
          <br />
          <br />
          <p>"{value.bio}"</p>
          <p className="bioP">
            {value.city},</p>
          <p className="bioP">
            {value.state} {value.country}</p>
          <br />
          <br />
        </Col>

        <Row>
          <div className="extendedNetwork">
            {value.username} is in your extended network
          </div>
        </Row>

      </>
    )}
  </UserConsumer>
)

export default UserInfo;
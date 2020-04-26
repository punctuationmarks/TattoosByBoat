import React from "react";
import { UserConsumer, } from "../providers/UserProvider";
import { NavLink, } from "react-router-dom";
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';


const NavbarMe = () => (
  <UserConsumer>
    {value => (
      <>
        <Navbar style={{ fontSize: "14px" }} bg="primary" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link
              style={{
                color: "white"
              }}
              href="/">
              MySpace.com | Home
        </Nav.Link>

            <Form style={{ color: "white", marginLeft: "50px" }}>
              {['radio'].map(type => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="The Web"
                    type={type}
                    id={`inline-${type}-2`} />
                  <Form.Check
                    inline
                    label="MySpace"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Form>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="light">Search</Button>
            </Form>
          </Nav>

          <Nav>
            <Nav.Link
              style={{
                position: "relative",
                height: "30px",

                color: "white",
              }}
              href="/"
            >
              Help | SignOut
        </Nav.Link>
          </Nav>
        </Navbar>
        <Navbar
          style={{
            // backgroundImage: "linear-gradient(to right, red , yellow)",
            position: "relative",
            backgroundColor: "#56AFEC",
            height: "30px",
            fontSize: "14px"
          }}
          variant="dark"
        >
          <Nav className="mr-auto">
            <Nav.Link
              style={{
                position: "relative",
                height: "30px",

                color: "white",
              }}
              href="/"
            >
              Home |
          </Nav.Link>
            <Nav.Link
              style={{
                position: "relative",
                height: "30px",

                color: "white",
              }}
            >
              Mail |
          </Nav.Link>
            <Nav.Link
              style={{
                position: "relative",
                height: "30px",

                color: "white",
              }}
            >
              Profile |
          </Nav.Link>
            <Nav.Link
              style={{
                position: "relative",
                height: "30px",

                color: "white",
              }}
            >
              Friends |
          </Nav.Link>
            <Nav.Link
              style={{
                position: "relative",
                height: "30px",

                color: "white",
              }}
            >
              Music
          </Nav.Link>
            <Nav.Link
              style={{
                position: "relative",
                height: "30px",

                color: "white",
              }}
            >
              | Video |
          </Nav.Link>
            <Nav.Link
              style={{
                position: "relative",
                height: "30px",

                color: "white",
              }}
            >
              Games
          </Nav.Link>
            <Nav.Link
              style={{
                position: "relative",
                height: "30px",

                color: "white",
              }}
            >
              | Events |
          </Nav.Link>
            <Nav.Link
              style={{
                position: "relative",
                height: "30px",

                color: "white",
              }}
            >
              More |
          </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              style={{
                position: "relative",
                height: "30px",
                width: "90px",
                color: "white",
              }}
              href="/user/profile"
            >

              {/*  be replaced with the actual username */}
              {value.username}
            </Nav.Link>

          </Nav>
        </Navbar>

      </>
    )}
  </UserConsumer>
)

export default NavbarMe;
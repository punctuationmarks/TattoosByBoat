import React from "react";
import { UserConsumer } from "../providers/UserProvider";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

const NavbarComponent = () => (
  <UserConsumer>
    {(value) => (
      <>
        <Navbar className="navbar" bg="primary" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link
              style={{
                color: "white",
                fontSize: "1.75em",
              }}
              href="/"
            >
              by {value.username}
            </Nav.Link>
          </Nav>

          <Nav>
            <Form
              inline
              action="https://duckduckgo.com/"
              method="get"
              className="navSearchBar"
            >
              <FormControl
                name="q"
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button type="submit" variant="light">
                Search
              </Button>
            </Form>

            <Nav.Link
              className="headerLinks"
              target="_blank"
              href="https://duckduckgo.com/"
              rel="noopener noreferrer"
            >
              SignOut
            </Nav.Link>
          </Nav>
        </Navbar>
        <Navbar className="secondaryNavbar" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link className="headerLinks" href={value.home_link}>
              Home |
            </Nav.Link>

            <Nav.Link
              className="headerLinks"
              href={value.friends_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Friends |
            </Nav.Link>
            <Nav.Link
              className="headerLinks"
              href={value.music_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Music |
            </Nav.Link>

            <Nav.Link
              className="headerLinks"
              href={value.events_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Events
            </Nav.Link>
          </Nav>
        </Navbar>
      </>
    )}
  </UserConsumer>
);

export default NavbarComponent;

import React from "react";
import { UserConsumer, } from "../providers/UserProvider";
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';


const NavbarComponent = () => (
  <UserConsumer>
    {value => (
      <>
        <Navbar className="navbar" bg="primary" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link
              style={{
                color: "white",
                fontSize: "2.25em"
              }}
              href="/">
              {value.username}
            </Nav.Link>

          </Nav>



          <Nav>

            {/* fix this! */}
            <Form inline
              action="https://duckduckgo.com/"
              method="get"
              className="navSearchBar">
              <FormControl
                name="q"
                type="text"
                placeholder="Search"
                className="mr-sm-2" />
              <Button
                type="submit"
                variant="light">
                Search
              </Button>

            </Form>

            <Nav.Link
              className="headerLinks"
              target="_blank"
              href="/"
            >
              Help | SignOut
        </Nav.Link>
          </Nav>
        </Navbar>
        <Navbar className="secondaryNavbar"
          variant="dark"
        >
          <Nav className="mr-auto">
            <Nav.Link
              className="headerLinks"
              href={value.home_link}
            >
              Home |
          </Nav.Link>
            <Nav.Link
              className="headerLinks"
              target="_blank"
              href={value.mail_link}
            >
              Mail |
          </Nav.Link>


            <Nav.Link
              className="headerLinks"
              target="_blank"
              href={value.profile_link}
            >
              Profile |
          </Nav.Link>
            <Nav.Link
              className="headerLinks"
              href={value.friends_link}
              target="_blank"
            >
              Friends |
          </Nav.Link>
            <Nav.Link
              className="headerLinks"
              href={value.music_link}
              target="_blank"
            >
              Music
          </Nav.Link>
            <Nav.Link
              className="headerLinks"
              href={value.video_link}
              target="_blank"
            >
              | Video |
          </Nav.Link>
            <Nav.Link
              className="headerLinks"
              href={value.game_link}
              target="_blank"
            >
              Games |
          </Nav.Link>
            <Nav.Link
              className="headerLinks"
              href={value.events_link}
              target="_blank"
            >
              Events 
          </Nav.Link>
          </Nav>
        </Navbar>
      </>
    )}
  </UserConsumer>
)

export default NavbarComponent;
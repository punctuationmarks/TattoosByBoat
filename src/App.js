import React, { Fragment, } from 'react';
import NavbarComponent from "./components/Navbar";
import UserProfile from "./components/UserProfile";
import { Switch, Route, } from "react-router-dom";
import { Container } from 'react-bootstrap'
import "./static/App.css";

const App = () => (

  <Fragment>
    <NavbarComponent />
    <Container>
      <Switch>
        {/* this is only here because app was originally larger, needs to be refactored */}
        <Route
          exact
          path="/"
          render={() => <UserProfile />}
        />
      </Switch>
    </Container>

  </Fragment>
)

export default App;
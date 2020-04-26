import React, { Fragment, } from 'react';
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile2";
import { Switch, Route, } from "react-router-dom";
import { Container } from 'react-bootstrap'
import "./App.css";

const App = () => (

  <Fragment>


    <Navbar />
    <Container>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <UserProfile />}
        />
        <Route
          exact
          path="/user/profile"
          render={() => <UserProfile />}
        />
      </Switch>
    </Container>

  </Fragment>
)

export default App;
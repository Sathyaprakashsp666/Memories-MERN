import { Container } from "@material-ui/core";
import React from "react";
import Home from "../Home";
import Navbar from "../Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Auth from "../Auth/Auth";

const Routes = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/auth">
          <Auth />
        </Route>
      </Switch>
    </Container>
  );
};

export default Routes;

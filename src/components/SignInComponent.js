import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";

import { Switch, Route, Redirect, NavLink, Link } from "react-router-dom";
import "../App.css";
function SignIn() {
  return (
    <center>
      <div className="boundary">
        <Form className="signinform">
          <h1>Sign In</h1>
          <div className="">
            <Label for="username" className="abovetheinput">
              UserName
            </Label>
            <Input type="" placeholder="ABC_123" id="username" />
          </div>
          <div className="">
            <Label for="password" className="abovetheinput">
              Password
            </Label>
            <Input type="" placeholder="Password" id="password" />
          </div>
          <Link href="#" className="newaroundhere" to="/signup">
            New around here? Sign Up
          </Link>
          <br />
          <Input type="checkbox" />
          Remember Me
          <br />
          <Button className="submit">Sign In</Button>
        </Form>
      </div>
    </center>
  );
}

export default SignIn;

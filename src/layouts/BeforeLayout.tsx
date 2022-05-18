import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import BeforeHead from "../components/Header/beforeHead";

const BfLayout = (props: any)=> {
  return (
    <div>
      <BeforeHead />
      <div className="container main-content">{props.children}</div>
    </div>
  );
};

export default BfLayout;

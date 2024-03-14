import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

export default function CustomNavbar({ handleToggleMenu }) {
  return (
    <div className="Navbar">
      <Navbar expand="lg" bg="body-tertiary">
        <Navbar.Brand href="../index.html">
          <img
            src={process.env.PUBLIC_URL + "/shpLogo.png"}
            alt="Shiny Happy People Logo"
            className="shpLogo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" onClick={handleToggleMenu} />
        <Navbar.Collapse id="navbarNav">
          <Nav>
            <Nav.Item className="start">
              <Nav.Link href="index.html">Start</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="varfor.html">VARFÖR</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="vadada.html">VADÅ DÅ</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="vibah.html">VI BAH’</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="dura.html">MEN DU´RA</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

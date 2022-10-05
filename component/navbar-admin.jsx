import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { deleteCookie } from "cookies-next";

const NavbarAdmin = () => {

  const logout = () => {
    deleteCookie("Token");
    deleteCookie("Name")
    alert("berhasil logout")
  }

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="shadow-sm p-3  bg-body rounded fw-semibold fixed-top"
      >
        <Container className="px-0">
          <Navbar.Brand href="#">
            <p className="yellow-font">
              <span className="green-font">WARE</span>HOUSE
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav
            style={{ maxHeight: '100px' }}
            navbarScroll>
              <Nav.Link href="/home"><p className="yellow-font-hover">Beranda</p></Nav.Link>
              <Nav.Link href="/"><p className="yellow-font-hover">Tentang Kami</p></Nav.Link>
              <Nav.Link><FontAwesomeIcon icon={faUserCircle} size="xl" className="yellow-font"/></Nav.Link>
                <NavDropdown  title={<span className="yellow-font-hover" alignRight>Hello, Admin</span>}>
                  <NavDropdown.Item href="/adminverification" className="yellow-font-hover fw-semibold">Verifikasi</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/" className="yellow-font-hover fw-semibold" onClick={logout}>Keluar</NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarAdmin
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Actions/userAction.js";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand className="text-center">The Retro's</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {userInfo ? (
                  <LinkContainer to="/favourites">
                    <Nav.Link style={{ paddingLeft: "10px" }}>
                      <FavoriteIcon />
                      &nbsp;Favorites
                    </Nav.Link>
                  </LinkContainer>
                ) : (
                  <LinkContainer to="/login">
                    <Nav.Link style={{ paddingLeft: "10px" }}>
                      <FavoriteIcon />
                      &nbsp;Favorites
                    </Nav.Link>
                  </LinkContainer>
                )}

                <LinkContainer to="/cart">
                  <Nav.Link style={{ paddingLeft: "10px" }}>
                    <ShoppingCartIcon />
                    &nbsp;Cart
                  </Nav.Link>
                </LinkContainer>

                {userInfo ? (
                  <NavDropdown
                    title={userInfo.name}
                    style={{ paddingLeft: "20px", fontSize: "14px" }}
                  >
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <PersonIcon />
                      &nbsp;Sign In
                    </Nav.Link>
                  </LinkContainer>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;

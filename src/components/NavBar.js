import React, { Component, useContext } from 'react'
import { Navbar, Nav, NavDropdown, NavLink } from 'react-bootstrap'
import { CurrentUserContext } from '../App';
import styles from '../App.module.css';


const NavBar = () => {

    const currentUser = useContext(CurrentUserContext);

    const loggedInIcons = <>{currentUser?.username}</>;
    const loggedOutIcons = (
      <>
          <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/signin">Sign in</Nav.Link>
                        <Nav.Link href="/signup">Sign up</Nav.Link>

                    </Nav>
                    {currentUser ? loggedInIcons : loggedOutIcons}
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
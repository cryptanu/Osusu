import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/pages/join" activeStyle>
            Join
          </NavLink>
          <NavLink to="/contributors" activeStyle>
            Contributors
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;
import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    NavbarContainer,
    NavLogo,
    Nav,
    NavLinks,
    NavMenu,
    NavItem,
    MobileIcon,
    NavBtnLink,
    NavBtn
} from "./NavbarElements";

const Navbar = ({toggle}) => {
    return(
    <>
        <Nav>
           <NavbarContainer>
               <NavLogo to="/">money</NavLogo>
               <MobileIcon onClick={toggle}>
                   <FaBars/>
               </MobileIcon>
               <NavMenu>
                   <NavItem>
                       <NavLinks to="about">About</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="discover">Discover</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="services">Services</NavLinks>
                   </NavItem>
                   <NavItem>
                       <NavLinks to="signup">Sign up</NavLinks>
                   </NavItem>
               </NavMenu>
               <NavBtn>
                   <NavBtnLink to="/signin">Sign in</NavBtnLink>
               </NavBtn>
           </NavbarContainer>
        </Nav>
    </>
    );
}

export default Navbar;

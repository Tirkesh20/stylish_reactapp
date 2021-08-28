import React, {useState} from 'react'
import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarLink, SidebarMenu,
    SidebarRoute,
    SidebarWrapper,
    SideBtnWrap
} from "./Sidebar.Elements";

const Sidebar=()=>{
    const [isOpen,setIsOpen]=useState(false);

    const toggle=()=>{
        setIsOpen(!isOpen);
    }

    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
            <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about"  onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="discover"  onClick={toggle}>discover</SidebarLink>
                    <SidebarLink to="services"  onClick={toggle}>services</SidebarLink>
                    <SidebarLink to="signup"  onClick={toggle}>signup</SidebarLink>
                </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">Sign in</SidebarRoute>
            </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default Sidebar

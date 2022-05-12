import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";
const Nav = styled.div`
  background: black;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background:black;
  width: 250px;
  height:100vh;
  display:flex;
  justify-content:center;
  position:fixed;
  top:0;
  left:${({ sideBar }) => (sideBar ? "0" : "-100%")}
  transition: 350ms;
  z-index:10;
  `;

const SidebarWrap = styled.div`
  width: 100%;
`;
const Sidebar = () => {
  const [sideBar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sideBar);

  return (
    <>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
      </Nav>
      <SidebarNav sideBar={sideBar}>
        <SidebarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};
export default Sidebar;

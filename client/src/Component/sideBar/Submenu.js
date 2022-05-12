import { ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const SidebarLink = styled(Link)`
display:flex;
color:#e1e9fc;
`;

const SidebarLabel =styled.span``;

const Submenu = ({item}) =>{
return(
    <>
    <SidebarLink to={item.path}>
        <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
        </div>
    </SidebarLink>
    </>
)
}

export default Submenu
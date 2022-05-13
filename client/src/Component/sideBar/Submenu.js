import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;

const datas=[
 
    {
      title: "Privacy2",
      path: "/side",
    },
    {
      title: "Privacy3",
      path: "/side",
    },
  ]
const Submenu = ({ item }) => {
    console.log('item',item)
  const [subnav, setSubnav] = useState(false);
  const [title,setTitle]=useState('')
  const[child,subchild]=useState(false)
console.log('subnav',subnav)
const handleSubChild=(item)=>{
  console.log("clicked",item)
  setTitle(item)
  subchild(true)
}
  const showSubnav = () => setSubnav(!subnav);
  console.log('subnav',subnav)
  return (
    <>
      <SidebarLink to={item.path} onClick={showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
            console.log('subnav',item.subNav)
          return (
         <>
         {/* <Submenu2 item={item} /> */}
            <DropdownLink to={item.path} key={index} onClick={()=>handleSubChild(item.title)}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
            </>
          );
        })}
        {
          (child) && (
           datas.map((itm,index)=>{
              return(
                <>
                 <DropdownLink to={itm.path} key={index}>
              {itm.icon}
              <SidebarLabel>{itm.title}</SidebarLabel>
            </DropdownLink>
                </>
              )
            })
          )
        }
    </>
  );
};

export default Submenu;

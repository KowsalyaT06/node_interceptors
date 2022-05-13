import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
export const SidebarData = [
  {
    title: "Home",
    path: "/side",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "users",
        path: "/side",
        icon: <IoIcons.IoIosPerson />,
        subNav2: [
          {
            title: "Privacy2",
            path: "/side",
          },
          {
            title: "Privacy3",
            path: "/side",
          },
        ]
      }
    ],
  },
  {
    title: "Share",
    path: "/side",
    icon: <RiIcons.RiShareFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Facebook",
        path: "/share/facebook",
        icon: <RiIcons.RiFacebookFill />,
      },
      {
        title: "Whatsapp",
        path: "/share/whatsapp",
        icon: <FaIcons.FaWhatsapp />,
      },
      {
        title: "Twitter",
        path: "/share/twitter",
        icon: <FaIcons.FaTwitter />,
      },
    ],
  },
  {
    title: "Notification",
    path: "/notify",
    icon: <IoIcons.IoIosNotifications />,
  },
  {
    title: "Category",
    path: "/side",
    icon: <BiIcons.BiCategory />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "HTML",
        path: "/category/html",
        icon: <RiIcons.RiHtml5Fill />,
      },
      {
        title: "JavaScript",
        path: "/category/javascript",
        icon: <IoIcons.IoLogoJavascript />,
      },
      {
        title: "React",
        path: "/category/react",
        icon: <FaIcons.FaReact />,
      },
    ],
  },
  {
    title: "Settings",
    path: "/side",
    icon: <RiIcons.RiSettings4Fill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "General Settings",
        path: "/setting/general",
      },

      {
        title: "Account",
        path: "/setting/account",
      },
      {
        title: "Privacy",
        path: "/side",
      
        subNav2: [
          {
            title: "Privacy2",
            path: "/side",
          },
          {
            title: "Privacy3",
            path: "/side",
          },
        ],
      },
    ],
  },
];

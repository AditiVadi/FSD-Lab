import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";

export const sidebarData =[
    {
     title: 'Home',
     path:'/',
     icon:<AiIcons.AiTwotoneHome/>,
     cName:'nav-text'
    },
    {
        title: 'About',
        path:'/about',
        icon:<MdIcons.MdRoundaboutRight/>,
        cName:'nav-text'
       },
       {
        title: 'Contact',
        path:'/contact',
        icon:<BiIcons.BiSolidContact/>,
        cName:'nav-text'
       }
]
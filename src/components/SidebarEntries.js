import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarEntries = [
    {
        title: 'Home',
        path: '/',
        cid: 'nav-text'
    },
    {
        title: 'Timeline',
        path: '/timeline',
        cid: 'nav-text'
    },
    {
        title: 'Concepts',
        path: '/concepts',
        cid: 'nav-text'
    },
    {
        title: 'Playground',
        path: '/playground',
        cid: 'nav-text'
    },
    {
        title: 'Knowledge',
        path: '/knowledge',
        cid: 'nav-text'
    }
];
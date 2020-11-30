import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as biIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import * as cgIcons from "react-icons/cg";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Medicines',
        path: '/',
        icon: <cgIcons.CgPill />,
        cName: 'nav-text'
    },
    {
        title: 'Ayush',
        path: '/products',
        icon: <FaIcons.FaEnvira />,
        cName: 'nav-text'
    },
    {
        title: 'Health Store',
        path: '/',
        icon: <biIcons.BiClinic />,
        cName: 'nav-text'
    },
    {
        title: 'Healthcare Device',
        path: '/',
        icon: <RiIcons.RiStethoscopeFill />,
        cName: 'nav-text'
    },
    {
        title: 'Doctor',
        path: '/',
        icon: <biIcons.BiFirstAid />,
        cName: 'nav-text'
    },
    {
        title: 'Labs',
        path: '/',
        icon: <biIcons.BiLocationPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Scan',
        path: '/',
        icon: <cgIcons.CgToday />,
        cName: 'nav-text'
    },
    {
        title: 'Veterinary Care',
        path: '/',
        icon: <FaIcons.FaPaw />,
        cName: 'nav-text'
    },
    {
        title: 'covid-19',
        path: '/',
        icon: <cgIcons.CgSwiss />,
        cName: 'nav-text'
    },
    {
        title: 'Drhealth Chat',
        path: '/',
        icon: <biIcons.BiMessageAdd />,
        cName: 'nav-text'
    }
];
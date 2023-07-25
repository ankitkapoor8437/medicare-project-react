import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

export const socialLinks = [
    {
        path: '',
        icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
    },
    {
        path: '',
        icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
    },
    {
        path: '',
        icon:<AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
    },
    {
        path: '',
        icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
    },
];

export const quickLinks1 = [
    {
        path: '/home',
        display: 'Home',
    },
    {
        path: '/',
        display: 'About Us',
    },
    {
        path: '/services',
        display: 'Services',
    },
    {
        path: '/',
        display: 'Blog',
    },
];

export const quickLinks2 = [
    {
        path: '/find-a-doctor',
        display: 'Find a Doctor',
    },
    {
        path: '/',
        display: 'Request an Appointment',
    },
    {
        path: '/',
        display: 'Find a location',
    },
    {
        path: '/',
        display: 'Get an Opinion',
    },
];

export const quickLinks3 = [
    {
        path: '/',
        display: 'Donate',
    },
    {
        path: '/contact',
        display: 'Contact Us',
    },
];


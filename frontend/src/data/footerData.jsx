import React from "react";
import { FaFacebookF, FaGithub,FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt, FaHospital } from 'react-icons/fa';

export const footMenu = [
    {
        id: 1,
        title: "Shop & More",
        menu: [
            {
                id: 1,
                link: "Buy Medicines",
                path: "/buy-medicines"
            },
            {
                id: 2,
                link: "Disease Prediction",
                path: "/disease-prediction"
            }
        ]
    },
    {
        id: 2,
        title: "Ours",
        menu: [
            {
                id: 1,
                link: "About Us",
                path: "/"
            },
            {
                id: 2,
                link: "Contact Us",
                path: "/"
            },
            {
                id: 3,
                link: "FAQ",
                path: "/"
            }
        ]
    }
];

export const footSocial = [
    {
        id: 1,
        icon: <FaGithub />,
        cls: "GitHub",
        path: "https://github.com/PratikMane0112/TelMedSphere",
    },
       {
        id: 2,
        icon: <IoMdMail />,
        cls: "Mail",
        path: "/",
    },
    {
        id: 3,
        icon: <FaPhoneAlt />,
        cls: "phone",
        path: "/",
    },
    {
        id: 4,
        icon: <FaHospital />,
        cls: "Hospital",
        path: "/",
    },
   
];

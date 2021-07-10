import React from "react";
import { FiTwitter } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GiSpyglass, GiWoodCabin, GiSmartphone } from "react-icons/gi";

export const links = [
  {
    id: 1,
    url: "/home",
    text: "main lodge",
    icon: <GiWoodCabin />,
  },
  {
    id: 2,
    url: "/about",
    text: "learn more",
    icon: <GiSpyglass />,
  },
  {
    id: 3,
    url: "/contact",
    text: "say hello!",
    icon: <GiSmartphone className="phone-icon" />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com/SpruceMagenta?s=09",
    icon: <FiTwitter />,
  },
  {
    id: 2,
    url: "https://github.com/MagentaSpruce",
    icon: <AiFillGithub />,
  },
  {
    id: 3,
    url: "https://www.tiwtter.com",
    icon: <AiFillLinkedin />,
  },
];

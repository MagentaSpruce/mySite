import React from "react";
import { links, social } from "./data";
import { useGlobalContext } from "./Context";
import Snowfall from "react-snowfall";
import Wave from "react-wavify";
import { GiShoonerSailboat } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FiTwitter } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GiSpyglass, GiWoodCabin, GiSmartphone } from "react-icons/gi";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <div className="moon-div">
          <div className="moon"></div>
        </div>
        <button className="close-btn" onClick={closeSidebar}>
          ❌
        </button>
        <div className="main">
          <div className="cloud"></div>
        </div>
      </div>

      <div className="night">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      {/* <div className="container">
        
      </div> */}
      <div>
        <svg
          height="45%"
          width="100%"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150 waves"
        >
          <defs>
            <linearGradient id="gradient">
              <stop offset="5%" stopColor="#47597E"></stop>
              <stop offset="95%" stopColor="#293b5f"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,100 0,100 C 72.47846889952152,114.45933014354067 144.95693779904303,128.91866028708134 243,124 C 341.04306220095697,119.08133971291866 464.6507177033493,94.7846889952153 581,81 C 697.3492822966507,67.2153110047847 806.4401913875599,63.942583732057415 896,75 C 985.5598086124401,86.05741626794259 1055.5885167464114,111.44497607655504 1143,118 C 1230.4114832535886,124.55502392344496 1335.2057416267944,112.27751196172248 1440,100 C 1440,100 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            className="transition-all duration-300 ease-in-out delay-150"
          ></path>
          <defs>
            <linearGradient id="gradient">
              <stop offset="5%" stopColor="#002bdc88"></stop>
              <stop offset="95%" stopColor="#32ded488"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 118.94736842105263,205.244019138756 237.89473684210526,210.48803827751198 333,221 C 428.10526315789474,231.51196172248802 499.36842105263156,247.2918660287081 590,237 C 680.6315789473684,226.7081339712919 790.6315789473684,190.3444976076555 888,186 C 985.3684210526316,181.6555023923445 1070.1052631578948,209.33014354066984 1160,217 C 1249.8947368421052,224.66985645933016 1344.9473684210525,212.33492822966508 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            className="transition-all duration-300 ease-in-out delay-150"
          ></path>
          <defs>
            <linearGradient id="gradient">
              <stop offset="5%" stopColor="#002bdcff"></stop>
              <stop offset="95%" stopColor="#32ded4ff"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,300 0,300 C 114.00956937799043,296.1626794258373 228.01913875598086,292.32535885167465 335,303 C 441.98086124401914,313.67464114832535 541.933014354067,338.8612440191387 628,332 C 714.066985645933,325.1387559808613 786.2488038277512,286.22966507177034 863,283 C 939.7511961722488,279.77033492822966 1021.0717703349283,312.2200956937799 1118,321 C 1214.9282296650717,329.7799043062201 1327.4641148325359,314.88995215311 1440,300 C 1440,300 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            className="transition-all duration-300 ease-in-out delay-150"
          ></path>
        </svg>
      </div>
      <ul className="links">
        <li>
          <Link to="/">
            <GiWoodCabin />
            main lodge
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "/about" }}>
            <GiSpyglass />
            Learn More
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <GiSmartphone />
            Say Hello
          </Link>
        </li>
      </ul>
      <div style={{ height: 100, width: 100, background: "transparent" }}>
        <Snowfall snowflakeCount={80} />
      </div>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
      <GiShoonerSailboat className="boat" />
      <Wave
        className="wave"
        fill="url(#548CA8)"
        paused={false}
        options={{
          height: 30,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      >
        <defs>
          <linearGradient id="548CA8" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor="#47597e" />
            <stop offset="90%" stopColor="#293b5f" />
          </linearGradient>
        </defs>
      </Wave>
    </aside>
  );
};

export default Sidebar;

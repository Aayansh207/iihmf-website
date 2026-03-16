import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo_tbi.png";
import { FaArrowRightLong } from "react-icons/fa6";
import DST_NIDHI from "../Assets/DST_NIDHI.png";
import DST_LOGO from "../Assets/dst_logo.png";
import START_IN_UP from "../Assets/startinup.png";
import MNNIT_LOGO from "../Assets/mnnit_logo.jpeg";
import { Link, useLocation } from "react-router-dom";
import { LiaAngleDownSolid } from "react-icons/lia";
import { IoMenu } from "react-icons/io5";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { AiOutlineTeam } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";
import { GrOverview } from "react-icons/gr";
import { GoFileDirectory } from "react-icons/go";

const Navbar = () => {
  const [portfolioOpen,setPortFolioOpen] = useState(false);
  const [eventsOpen,setEventsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isEventsActive = location.pathname.startsWith("/events");
  const isPortfolioActive = location.pathname.startsWith("/portfolio");
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`tbi-navbar ${
        isScrolled ? "scrolled-background" : "gradient-background"
      }`}
    >
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <div className="logo-txt">
            <h3>Innovation and Incubation Hub MNNIT</h3>
          </div>
        </div>
      </Link>
      <ul className="nav-items">
        <Link to="/">
          <li className={location.pathname === "/" ? "active-item" : ""}>
            Home
          </li>
        </Link>
        <Link to="/aboutus">
          <li className={location.pathname === "/aboutus" ? "active-item" : ""}>
            About Us
          </li>
        </Link>
        <Link to="/team">
          <li className={location.pathname === "/team" ? "active-item" : ""}>
            Team
          </li>
        </Link>
        <li className={isEventsActive ? "active-item" : ""}>
          Events/Awards <LiaAngleDownSolid size={20} />
          <div className="events-dropdown">
            <ul>
              <Link to="/events/ted">
                <li>TEDx MNNIT</li>
              </Link>
              <Link to="/events/udbhav">
                <li>Udbhav</li>
              </Link>
              <Link to="/events/ren">
                <li>Renaissance</li>
              </Link>
              <Link to="/events/other-events">
                <li>Events/News</li>
              </Link>
              <Link to="/events/awards">
                <li>Awards</li>
              </Link>
            </ul>
          </div>
        </li>
        <Link to="/careers">
          <li className={location.pathname === "/career" ? "active-item" : ""}>
            Career/Jobs
          </li>
        </Link>
        <li className={isPortfolioActive ? "active-item" : ""}>
          Portfolio <LiaAngleDownSolid size={20} />
          <div
            className={`portfolio-dropdown ${
              location.pathname === "/startup-dir" ? "active-item" : ""
            }`}
          >
            <ul>
              {/* <Link to="/portfoilo/overview">
                <li>Overview</li>
              </Link> */}
              <Link to="/portfolio/startup-dir">
                <li>Startup Directory</li>
              </Link>
              <Link to="/portfolio/PreIncubated">
                <li>Pre-Incubated Directory</li>
              </Link>
            </ul>
          </div>
        </li>
      </ul>
      <div className="logos-container">
        <img src={MNNIT_LOGO} alt="" />
        <img src={DST_NIDHI} alt="" />
        <img src={START_IN_UP} alt="" />
        <img src={DST_LOGO} alt="" />
      </div>
      <div className="btn-and-menu">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSev7gWFtCHbexbBw28l7F3x_8qwM5GwFIE55w7nK9csJJgeJw/viewform"
          target="_blank"
          rel="noopener noreferrer">
          <button className="cohort-btn">
            Register for Cohort{" "}
            <FaArrowRightLong size={16} className="reg-arrow" />
          </button>
        </a>
        <a
          href="/Registration">
          <button className="signup-btn">
            Registration{" "}
            <FaArrowRightLong size={16} className="reg-arrow" />
          </button>
     </a>
        <div className="menu" onClick={toggleDrawer}>
          <IoMenu size={36} color="#3a3a3a" />
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="tbi-sidebar"
        >
          <div className="tbi-sidebar-head">
            <div className="tbi-sidebar-logo">
              <img src={logo} alt="" />
            </div>
            <div className="tbi-sidebar-head-text">
              <h1>IIHMF</h1>
            </div>
          </div>
          <ul className="tbi-sidebar-items">
            <Link to="/">
              <li>
                <GoHome size={26} /> Home
              </li>
            </Link>
            <Link to="/aboutus">
              <li>
                <IoIosInformationCircleOutline size={26} /> About Us
              </li>
            </Link>
            <Link to="/team">
              <li>
                <AiOutlineTeam size={26} /> Team
              </li>
            </Link>
            <Link>
              <li onClick={()=>{
                setEventsOpen(!eventsOpen)
                }}>
                <MdOutlineEmojiEvents size={26} /> Events/Awards{" "}
                <LiaAngleDownSolid />
              </li>
              <div className={`sidebar-events-dropdown ${eventsOpen ? 'sidebar-events-dropdown-open' : ''}`}>
                  <ul>
              <Link to="/events/ted">
                <li><FaArrowRightLong />TEDx MNNIT</li>
              </Link>
              <Link to="/events/udbhav">
                <li><FaArrowRightLong />Udbhav</li>
              </Link>
              <Link to="/events/ren">
                <li><FaArrowRightLong />Renaissance</li>
              </Link>
              <Link to="/events/other-events">
                <li><FaArrowRightLong />Others</li>
              </Link>
              <Link to="/events/awards">
                <li><FaArrowRightLong />Awards</li>
              </Link>
            </ul>
                </div>
            </Link>
            <Link to="/careers">
              <li>
                 <BsPersonWorkspace size={20}/> Career/Jobs
              </li>
            </Link>
            <Link>
              <li onClick={()=>{
                setPortFolioOpen(!portfolioOpen)
                }}>
                <IoIosStats size={24} /> Portfolio <LiaAngleDownSolid />
              </li>
              <div className={`sidebar-portfolio-dropdown ${portfolioOpen ? 'sidebar-portfolio-dropdown-open' : ''}`}>
                  <ul>
                    <Link to="/portfoilo/overview">
                      <li><GrOverview size={20}/> Overview</li>
                    </Link>
                    <Link to="/portfolio/startup-dir">
                      <li><GoFileDirectory size={20} /> Startup Directory</li>
                    </Link>
                  </ul>
                </div>
            </Link>
          </ul>
         <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSev7gWFtCHbexbBw28l7F3x_8qwM5GwFIE55w7nK9csJJgeJw/viewform"
          target="_blank"
          rel="noopener noreferrer">
            <button className="sidebar-cohort-btn">
            Register for Cohort{" "}
              <FaArrowRightLong size={16} className="reg-arrow" />
            </button>
         </a>
         <Link to="/Registration">
            <button className="sidebar-signup-btn">
            Registration{" "}
              <FaArrowRightLong size={16} className="reg-arrow" />
            </button>
            </Link>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;

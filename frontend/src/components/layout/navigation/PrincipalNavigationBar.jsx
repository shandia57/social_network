import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./css/style.css";

// images
import logo2 from "./../../../images/logo/logo-white.svg";

const NavBar = () => {
  const [isActiveAside, setIsActiveAside] = useState(false);

  const displayAside = () => {
    const sidebar = document.querySelector(".app-sidebar");
    const sidebarUser = document.querySelector(".app-sidebar__user");
    const sidebarMenu = document.querySelector(".app-menu");
    sidebar.style.width = "180px";
    sidebarUser.style.display = "flex";
    sidebarMenu.style.display = "block";
  };

  const hideAside = () => {
    const sidebar = document.querySelector(".app-sidebar");
    const sidebarUser = document.querySelector(".app-sidebar__user");
    const sidebarMenu = document.querySelector(".app-menu");
    sidebar.style.width = "0px";
    sidebarUser.style.display = "none";
    sidebarMenu.style.display = "none";
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      hideAside();
    } else {
      displayAside();
    }
  });

  const handleClick = () => {
    if (isActiveAside) {
      setIsActiveAside(!isActiveAside);
      hideAside();
    } else {
      setIsActiveAside(!isActiveAside);
      displayAside();
    }
  };

  return (
    <>
      <nav className="app-navbar">
        <FontAwesomeIcon
          onClick={handleClick}
          className="app-navbar-bars"
          icon={faBars}
        />
        <Link className="app-navbar-brand" to="/home">
          <img className="logoNav" src={logo2} />
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;

// Import react
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// CSS
import "./css/style.css";

// Logo de l'entreprise
import logo2 from "./../../../images/logo/logo-white.svg";

const NavBar = () => {
  // States
  const [isActiveAside, setIsActiveAside] = useState(false);

  // Les fonction displayAside et hideAside permet simplement d'afficher ou non l'Aside de la page pour assurer le responsive
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

  // Lorsque la page de redimenssioner on veille à ce que l'Aside soit afficher ou non

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1100) {
      hideAside();
    } else {
      displayAside();
    }
  });

  // Lorsque l'on clique sur le bouton de la navbar, on affiche ou non l'Aside
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

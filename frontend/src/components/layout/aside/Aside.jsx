import { useEffect, useState } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";

import "./css/appSidebar/app-Sidebar.css";
import "./css/appSidebar/app-Sidebar-mobile.css";
import "./css/appMenu/app-menu.css";

import * as local from "../../../services/localStorage/AppLocalStorage";
import * as axios from "../../../services/axios/User";

const Aside = (props) => {
  // On récupère l'ID de l'utilisateur pour pouvoir afficher ses données

  const userId = local.getUserId();
  const [user, setUser] = useState({});

  // Navigate permet la redirection
  const navigate = useNavigate();
  // Location permet de vérifie sur quelle page l'utilisateur se situe, pour pouvoir afficher le bon menu en ACTIVE
  const location = useLocation();

  // Permet la déconnexion de l'utilisateur
  const logout = () => {
    const confirmation = window.confirm(
      "Êtes-vous sûr de vouloir vous déconnecter ?"
    );
    if (confirmation) {
      local.removeUserId();
      navigate("/");
    }
  };

  // Lorsque la page se charge, on récupère les données de l'utilisateur
  useEffect(() => {
    axios.getUserById(userId).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <aside className="app-sidebar">
      <div className="app-sidebar__user">
        <img
          className="app-sidebar__user-avatar"
          src={user.profile}
          alt="User Image"
        />
        <div>
          <p className="app-sidebar__user-name">
            {user.firstname} {user.lastname}
          </p>
        </div>
      </div>
      <ul className="app-menu">
        <li>
          <Link
            className={
              location.pathname === "/home"
                ? `app-menu__item active`
                : "app-menu__item"
            }
            to="/home"
          >
            <span className="app-menu__label">Page d'accueil</span>
          </Link>
        </li>

        {/* 
        
        Si l'utilisateur se trouve sur la route suivantes
          /user/publication/create
          /user/publication/update
          On utilise la methode split pourvoir récupérer uniquement le 'user' de la route complète
        
        */}
        <li>
          <Link
            className={
              location.pathname.split("/")[1] === "user"
                ? `app-menu__item active`
                : "app-menu__item"
            }
            to="/user"
          >
            <span className="app-menu__label">Mon compte</span>
          </Link>
        </li>

        <li>
          <div onClick={logout} className="app-menu__button">
            <span className="">Deconnexion</span>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;

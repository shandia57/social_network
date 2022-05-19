import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import "./css/appSidebar/app-Sidebar.css";
import "./css/appSidebar/app-Sidebar-mobile.css";
import "./css/appMenu/app-menu.css";

import user from "../../../images/user/user.jpg";

import * as local from "../../../services/localStorage/AppLocalStorage";
import * as db from "../../../services/axios/User";

const Aside = (props) => {
  const userId = local.getUserId();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const logout = () => {
    const confirmation = window.confirm(
      "Êtes-vous sûr de vouloir vous déconnecter ?"
    );
    if (confirmation) {
      local.removeUserId();
      navigate("/");
    }
  };

  useEffect(() => {
    db.getUserById(userId).then((res) => {
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
          {/* <p className="app-sidebar__user-designation">Full stack</p> */}
        </div>
      </div>
      <ul className="app-menu">
        <li>
          <Link className="app-menu__item active" to="/home">
            <span className="app-menu__label">Page d'accueil</span>
          </Link>
        </li>
        <li>
          <Link className="app-menu__item" to="/forums">
            <span className="app-menu__label">Forum</span>
          </Link>
        </li>
        <li>
          <Link className="app-menu__item" to="/user">
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

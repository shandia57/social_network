import { Link } from "react-router-dom";

import "./css/appSidebar/app-Sidebar.css";
import "./css/appSidebar/app-Sidebar-mobile.css";
import "./css/appMenu/app-menu.css";

import user from "../../../images/user/user.jpg";

import * as local from "../../../services/localStorage/AppLocalStorage";

const Aside = () => {
  const firstname = local.getUserFirstName();
  const lastname = local.getUserLastName();

  return (
    <aside className="app-sidebar">
      <div className="app-sidebar__user">
        <img
          className="app-sidebar__user-avatar"
          src="https://avatars.githubusercontent.com/u/90464110?v=4"
          alt="User Image"
        />
        <div>
          <p className="app-sidebar__user-name">
            {firstname} {lastname}
          </p>
          <p className="app-sidebar__user-designation">Full stack</p>
        </div>
      </div>
      <ul className="app-menu">
        <li>
          <Link className="app-menu__item active" to="/home">
            <i className="app-menu__icon fa fa-dashboard"></i>
            <span className="app-menu__label">Page d'accueil</span>
          </Link>
        </li>
        <li>
          <Link className="app-menu__item" to="/forums">
            <i className="app-menu__icon fa fa-laptop"></i>
            <span className="app-menu__label">Forum</span>
          </Link>
        </li>
        <li>
          <Link className="app-menu__item" to="/user">
            <i className="app-menu__icon fa fa-users"></i>
            <span className="app-menu__label">Mon compte</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;

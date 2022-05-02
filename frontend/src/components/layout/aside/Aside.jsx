import "./css/appSidebar/app-Sidebar.css";
import "./css/appSidebar/app-Sidebar-mobile.css";

import "./css/appMenu/app-menu.css";

import user from "../../../images/user/user.jpg";
const Aside = () => {
  return (
    <aside className="app-sidebar">
      <div className="app-sidebar__user">
        <img
          className="app-sidebar__user-avatar"
          src="https://avatars.githubusercontent.com/u/90464110?v=4"
          alt="User Image"
        />
        <div>
          <p className="app-sidebar__user-name">Gerlus Maktarus</p>
          <p className="app-sidebar__user-designation">Full stack</p>
        </div>
      </div>
      <ul className="app-menu">
        <li>
          <a className="app-menu__item active" href="index.html">
            <i className="app-menu__icon fa fa-dashboard"></i>
            <span className="app-menu__label">Page d'accueil</span>
          </a>
        </li>
        <li>
          <a className="app-menu__item" href="list.html">
            <i className="app-menu__icon fa fa-laptop"></i>
            <span className="app-menu__label">Forum</span>
          </a>
        </li>
        <li>
          <a className="app-menu__item" href="list.html">
            <i className="app-menu__icon fa fa-users"></i>
            <span className="app-menu__label">Mon compte</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;

// React
import { Link } from "react-router-dom";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

// CSS
import "./css/style.css";
import "./css/style-mobile.css";

const MultipleBreadCrumb = ({ title, icon, links, endLink }) => {
  return (
    <div className="app-title">
      <div>
        <h1>
          <FontAwesomeIcon icon={icon} />
          &nbsp;{title}
        </h1>
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item">
          <Link className="link" to="/home">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>
        {links.map((link, index) => (
          <li className="breadcrumb-item">
            <Link className="link no-decoration" to={link.path}>
              {link.linkName}
            </Link>
          </li>
        ))}
        <li className="breadcrumb-item">{endLink}</li>
      </ul>
    </div>
  );
};

export default MultipleBreadCrumb;

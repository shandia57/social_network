import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/style.css";
import "./css/style-mobile.css";
const MultipleBreadCrumb = ({ title, icon, linkName, path }) => {
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
            <FontAwesomeIcon icon={icon} />
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link className="link no-decoration" to={path}>
            {linkName}
          </Link>
        </li>
        <li className="breadcrumb-item">{title}</li>
      </ul>
    </div>
  );
};

export default MultipleBreadCrumb;

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <a href="#">
            <FontAwesomeIcon icon={icon} />
          </a>
        </li>
        <li className="breadcrumb-item">
          <Link to={path}>{linkName}</Link>
        </li>
        <li className="breadcrumb-item">{title}</li>
      </ul>
    </div>
  );
};

export default MultipleBreadCrumb;

import { Link } from "react-router-dom";

const MultipleBreadCrumb = ({ breadcrumbs }) => {
  return (
    <div className="app-title">
      <div>
        <h1>
          <i className="fa fa-users"></i>&nbsp;Suivi de Prénom NOM
        </h1>
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">
            <i className="fa fa-home fa-lg"></i>
          </a>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Employés</a>
        </li>
        <li className="breadcrumb-item">Suivi de Prénom NOM</li>
      </ul>
    </div>
  );
};

export default MultipleBreadCrumb;

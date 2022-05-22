import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// css
import "./css/style.css";

// On affiche un simple fil d'ariane comme pour la page d'accueil
const SingleBreadCrumb = ({ title, link, icon }) => {
  return (
    <div class="app-title">
      <div>
        <h1>
          <FontAwesomeIcon icon={icon} />
          &nbsp;{title}
        </h1>
      </div>
    </div>
  );
};

export default SingleBreadCrumb;

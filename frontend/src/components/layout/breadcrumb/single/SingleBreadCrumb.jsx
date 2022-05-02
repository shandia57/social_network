import { Link } from "react-router-dom";

// css
import "./css/style.css";

const SingleBreadCrumb = ({ title, link }) => {
  return (
    <div class="app-title">
      <div>
        <h1>
          <i class="fa fa-dashboard"></i>&nbsp;{title}
        </h1>
      </div>
    </div>
  );
};

export default SingleBreadCrumb;

import Aside from "../../components/layout/aside/Aside";
import SingleBreadCrumb from "../../components/layout/breadcrumb/single/SingleBreadCrumb";

const Forums = () => {
  return (
    <div className="app">
      <Aside />
      <div className="app-content">
        <SingleBreadCrumb title="Page d'accueil" />
      </div>
    </div>
  );
};

export default Forums;

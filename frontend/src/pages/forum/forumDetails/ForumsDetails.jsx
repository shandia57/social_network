import Aside from "../../../components/layout/aside/Aside"
import SingleBreadCrumb from "../../../components/layout/breadcrumb/single/SingleBreadCrumb";

const ForumsDetails = () => {
  return (
    <div className="app">
      <Aside />
      <div className="app-content">
        <SingleBreadCrumb title="Page d'accueil" />
        <h1>Forums details</h1>
      </div>
    </div>
  );
};
export default ForumsDetails;

import Aside from "../../components/layout/aside/Aside";
import SingleBreadCrumb from "../../components/layout/breadcrumb/single/SingleBreadCrumb";
const Home = () => {
  return (
    <div className="app">
      <Aside />

      <div className="app-content">
        <SingleBreadCrumb title="Page d'accueil" />
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;

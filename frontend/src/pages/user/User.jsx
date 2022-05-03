import SingleBreadCrumb from "../../components/layout/breadcrumb/single/SingleBreadCrumb";
import Aside from "../../components/layout/aside/Aside";

const User = () => {
    return (
        <div className="app">
            <Aside />
            <div className="app-content">
                <SingleBreadCrumb title="Page d'accueil" />
                <h1>User</h1>
            </div>
        </div>
    )
}

export default User;
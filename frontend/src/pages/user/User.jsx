import MultipleBreadCrumb from "../../components/layout/breadcrumb/multiples/MultipleBreadCrumb";
import Aside from "../../components/layout/aside/Aside";
import PhotoProfile from "../../components/user/photo-profil/PhotoProfile";
import UserInformation from "../../components/user/user-information/UserInformation";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Publications from "../../components/user/publication-table/Publications";

import * as local from "../../services/localStorage/AppLocalStorage";
import "./css/style.css";
const User = () => {
  const firstname = local.getUserFirstName();
  const lastname = local.getUserLastName();

  return (
    <div className="app">
      <Aside />
      <div className="app-content">
        <MultipleBreadCrumb
          title={`${firstname} ${lastname}`}
          icon={faUser}
          linkName="Mon profil"
          path="/user"
        />

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <PhotoProfile />
              <UserInformation />
            </div>

            <div className="col-md-8">
              <Publications />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

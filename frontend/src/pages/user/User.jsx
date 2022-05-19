import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// css
import "./css/style.css";

// compoenents
import Aside from "../../components/layout/aside/Aside";
import MultipleBreadCrumb from "../../components/layout/breadcrumb/multiples/MultipleBreadCrumb";
import PhotoProfile from "../../components/user/photo-profil/PhotoProfile";
import UserInformation from "../../components/user/user-information/UserInformation";
import Publications from "../../components/user/publication-table/Publications";

// icon
import { faUser } from "@fortawesome/free-solid-svg-icons";

// services
import * as local from "../../services/localStorage/AppLocalStorage";
import * as db from "../../services/axios/User";

const User = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const id = local.getUserId();
    if (!id) navigate("/auth");
    db.getUserById(id).then((user) => {
      setUser(user.data);
    });
  }, []);

  return (
    <div className="app">
      <Aside
        firstname={user.firstname}
        lastname={user.lastname}
        profile={user.profile}
      />
      <div className="app-content">
        <MultipleBreadCrumb
          title={`${user.firstname} ${user.lastname}`}
          icon={faUser}
          linkName="Mon profil"
          path="/user"
        />

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <PhotoProfile profile={user.profile} />
              <UserInformation
                firstname={user.firstname}
                lastname={user.lastname}
                email={user.email}
                birthday={user.birthday}
              />
            </div>

            <div className="col-md-8">
              <Publications publications={user.publications} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

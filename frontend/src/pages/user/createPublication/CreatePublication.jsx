import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// components
import Aside from "../../../components/layout/aside/Aside";
import MultipleBreadCrumb from "../../../components/layout/breadcrumb/multiples/MultipleBreadCrumb";
import BodyCreatePublication from "../../../components/user/bodyCreatePublication/BodyCreatePublication";

// icon
import { faUser } from "@fortawesome/free-solid-svg-icons";

// services
import * as local from "../../../services/localStorage/AppLocalStorage";
import * as db from "../../../services/axios/User";

const CreatePublication = () => {
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
        <BodyCreatePublication />
      </div>
    </div>
  );
};

export default CreatePublication;

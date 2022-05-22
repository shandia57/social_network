import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// components
import Aside from "../../../components/layout/aside/Aside";
import MultipleBreadCrumb from "../../../components/layout/breadcrumb/multiples/MultipleBreadCrumb";
import BodyCreatePublication from "../../../components/user/bodyCreatePublication/BodyCreatePublication";

// icons
import { faUser } from "@fortawesome/free-solid-svg-icons";

// services
import * as local from "../../../services/localStorage/AppLocalStorage";
import * as axios from "../../../services/axios/User";

const CreatePublication = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  // On redirige l'utilisateur si son ID n'est pas trouvé dans le localStorage
  // Soit il est déjà connecté, soit il n'a pas encore de compte
  useEffect(() => {
    const id = local.getUserId();
    if (!id) navigate("/auth");
    axios.getUserById(id).then((user) => {
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
          links={[
            {
              linkName: "Mon profil",
              path: "/user",
            },
          ]}
          endLink="Créer une publication"
        />
        <BodyCreatePublication />
      </div>
    </div>
  );
};

export default CreatePublication;

// React
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Component
import Aside from "../../components/layout/aside/Aside";
import SingleBreadCrumb from "../../components/layout/breadcrumb/single/SingleBreadCrumb";
import Publication from "../../components/home/publication/Publication";

// Icons
import { faHome } from "@fortawesome/free-solid-svg-icons";

// Services
import * as axios_publication from "../../services/axios/Publications";
import * as axios_user from "../../services/axios/User";
import * as local from "../../services/localStorage/AppLocalStorage";

const Home = () => {
  const [publications, setPublications] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  // On redirige l'utilisateur si son ID n'est pas trouvé dans le localStorage
  // Soit il est déjà connecté, soit il n'a pas encore de compte
  useEffect(() => {
    const id = local.getUserId();
    if (!id) navigate("/auth");
    axios_user.getUserById(id).then((user) => {
      setCurrentUser(user.data.login.isAdmin);
    });

    // On récupère toutes les publications
    axios_publication.getAllPublications().then((res) => {
      setPublications(res.data);
    });
  }, []);
  return (
    <div className="app">
      <Aside />

      <div className="app-content">
        <SingleBreadCrumb icon={faHome} title="Page d'accueil" />
        <div className="app-content-body">
          {publications.map((publication, index) => (
            <Publication
              key={publication.id}
              index={index}
              userId={currentUser}
              publicationId={publication.id}
              firstname={publication.user.firstname}
              lastname={publication.user.lastname}
              profile={publication.user.profile}
              title={publication.title}
              text={publication.text}
              image={publication.image}
              like={publication.likes}
              comments={publication.comments.length}
              published={publication.published}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

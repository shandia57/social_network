import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Aside from "../../components/layout/aside/Aside";
import Spinner from "../../components/layout/spinner/Spinner";
import SingleBreadCrumb from "../../components/layout/breadcrumb/single/SingleBreadCrumb";
import Publication from "../../components/home/publication/Publication";

import { faHome } from "@fortawesome/free-solid-svg-icons";

import * as db_publications from "../../services/axios/Publications";
import * as db_user from "../../services/axios/User";
import * as local from "../../services/localStorage/AppLocalStorage";

const Home = () => {
  const [publications, setPublications] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const id = local.getUserId();
    if (!id) navigate("/auth");
    db_user.getUserById(id).then((user) => {
      setCurrentUser(user.data.login.isAdmin);
    });

    db_publications.getAllPublications().then((res) => {
      setPublications(res.data);
    });
  }, []);
  return (
    <div className="app">
      <Aside />

      <div className="app-content">
        <SingleBreadCrumb icon={faHome} title="Page d'accueil" />
        <div>
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

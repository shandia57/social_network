import { useEffect, useState } from "react";

import Aside from "../../components/layout/aside/Aside";
import SingleBreadCrumb from "../../components/layout/breadcrumb/single/SingleBreadCrumb";
import Publication from "../../components/home/publication/Publication";

import { faHome } from "@fortawesome/free-solid-svg-icons";

import * as db_publications from "../../services/axios/Publications";
import * as db_user from "../../services/axios/User";
import * as local from "../../services/localStorage/AppLocalStorage";

const Home = () => {
  const [publications, setPublications] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    db_publications.getAllPublications().then((res) => {
      setPublications(res.data);
    });
    const id = local.getUserId();
    db_user.getUserById(id).then((user) => {
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
        <SingleBreadCrumb icon={faHome} title="Page d'accueil" />
        <div>
          {publications.map((publication, index) => (
            <Publication
              index={index}
              userId={publication.user.id}
              publicationId={publication.id}
              firstname={publication.user.firstname}
              lastname={publication.user.lastname}
              profile={publication.user.profile}
              title={publication.title}
              text={publication.text}
              image={publication.image}
              like={publication.liked}
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

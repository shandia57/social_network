import { useEffect, useState } from "react";

import Aside from "../../components/layout/aside/Aside";
import SingleBreadCrumb from "../../components/layout/breadcrumb/single/SingleBreadCrumb";
import Publication from "../../components/home/publication/Publication";

import { faHome } from "@fortawesome/free-solid-svg-icons";

import * as db from "../../services/axios/Publications";

const Home = () => {
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    db.getAllPublications().then((res) => {
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

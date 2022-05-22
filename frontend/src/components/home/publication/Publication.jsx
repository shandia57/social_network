// React
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// CSS
import "./css/style.css";
import "./css/style-mobile.css";

// Components
import HeaderProfile from "../../custom/headerProfile/HeaderProfile";
import Comments from "../comments/Comments";
import Liked from "../liked/Liked";
import ModalComments from "../../modal/home/comments/ModalComments";
import Spinner from "../../layout/spinner/Spinner";

// Services axios
import * as axios_commentaire from "../../../services/axios/Comments";
import * as axios_like from "../../../services/axios/Like";
import * as axios_publication from "../../../services/axios/Publications";

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Publication = (props) => {
  // On déclaire les STATES
  const [comments, setComments] = useState([]);
  const [userLiked, setUserLiked] = useState([]);

  // Permet de la redirection vers d'autres pages ciblés
  const navigate = useNavigate();

  // On récupère les commentaire de la publication lorsque l'utilisateur click sur l'icon
  const handleClickComments = () => {
    axios_commentaire
      .getCommentsByPublicationId(props.publicationId)
      .then((res) => {
        setComments(res.data);
      });
  };

  // Fonction pour supprimer la publication
  const deletePublication = () => {
    // On affiche un message de confirmation si l'utilisateur souhaite vraiment supprimer la publication
    const confirmDelete = window.confirm(
      "Voulez-vous vraiment supprimer cette publication ?"
    );

    // Si oui, on supprime la publication
    if (confirmDelete) {
      axios_publication
        .deletePublication(props.publicationId)
        .then(() => {
          navigate("/");
        })
        .catch(() => {
          alert("Une erreur est survenue");
        });
    }
  };

  useEffect(() => {
    // On vérifie si la publication n'est pas undifined
    // Car il y a un problème de synchronisation entre le temps où la page est chargé, et le temps où on récupère les données de la BDD

    if (props.publicationId !== undefined) {
      // On récupères tous les utilisateurs qu'ont liké la publication
      axios_like.getLikeByPublicationId(props.publicationId).then((res) => {
        const array = [];
        res.data.forEach((user) => {
          array.push(user.user.id);
        });
        setUserLiked(array);
      });
    }
  }, []);
  if (props.publicationId !== undefined) {
    return (
      <>
        <div className="publication__content">
          <div className="publication-content-header">
            <HeaderProfile
              firstname={props.firstname}
              lastname={props.lastname}
              profile={props.profile}
              published={props.published}
            />
            {props.userId === 1 ? (
              <FontAwesomeIcon
                className="cursorPointer"
                onClick={deletePublication}
                color="red"
                icon={faTrash}
              >
                Supprimer la publication
              </FontAwesomeIcon>
            ) : null}
          </div>
          <hr />
          <div className="publication-content-body">
            <h2 className="publication-content-body__title">{props.title}</h2>
            <p>{props.text}</p>
            <div className="publication-content-body__img">
              {props.image !== null ? (
                <img src={props.image} alt="image" />
              ) : null}
            </div>
          </div>
          <hr />
          <div className="publication-content-footer">
            <Liked publication={props.publicationId} likes={userLiked} />
            <Comments
              handleClickComments={handleClickComments}
              id={props.publicationId}
              comments={props.comments}
            />
          </div>
        </div>

        <ModalComments
          comments={comments}
          publicationId={props.publicationId}
          isAdmin={props.userId}
        />
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default Publication;

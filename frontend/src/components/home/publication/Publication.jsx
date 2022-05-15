import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// CSS
import "./css/style.css";

// Components
import HeaderProfile from "../../custom/headerProfile/HeaderProfile";
import SimpleButton from "../../custom/button/simpleButton/SimpleButton";
import Comments from "../comments/Comments";
import Liked from "../liked/Liked";
import ModalComments from "../../modal/home/comments/ModalComments";
import Spinner from "../../layout/spinner/Spinner";
// Services
import * as local from "../../../services/localStorage/AppLocalStorage";
import * as db from "../../../services/axios/Comments";
import * as db_like from "../../../services/axios/Like";
import * as db_publication from "../../../services/axios/Publications";

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Publication = (props) => {
  const [comments, setComments] = useState([]);
  const [userLiked, setUserLiked] = useState([]);
  const navigate = useNavigate();

  const handleClickComments = () => {
    db.getCommentsByPublicationId(props.publicationId).then((res) => {
      setComments(res.data);
    });
  };

  const deletePublication = () => {
    const confirmDelete = window.confirm(
      "Voulez-vous vraiment supprimer cette publication ?"
    );
    if (confirmDelete) {
      db_publication
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
    if (props.publicationId !== undefined) {
      db_like.getLikeByPublicationId(props.publicationId).then((res) => {
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

// CSS
import "./css/style.css";

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// Fonction AXIOS du fichier Comments du dossier Services
import * as axios from "../../../services/axios/Comments";

const SingleUserComment = (props) => {
  // Fonction qui permet la suppression du commentaire
  const deleteComment = () => {
    const confirmDelete = window.confirm(
      "Voulez-vous vraiment supprimer ce commentaire ?"
    );
    if (confirmDelete) {
      axios
        .deleteComment(props.commentId)
        .finally(() => {
          window.location.reload(false);
        })
        .catch((err) => {
          alert(
            "Une erreur est survenue lors de la suppression du commentaire"
          );
        });
    }
  };

  return (
    <div className="comment">
      <div className="comment-top">
        <div className="comment-bloc-left">
          <div className="comment--img">
            <img src={props.profile} alt={`user profile`} />
          </div>
          <div className="comment-user-info">
            {props.firstname} {props.lastname}
          </div>
        </div>
        <div className="comment-block-right">{props.published}</div>
      </div>

      <div className="comment-text">{props.text}</div>
      {props.isAdmin === 1 ? (
        <div className="comment-trash">
          <FontAwesomeIcon onClick={deleteComment} icon={faTrash} color="red" />
        </div>
      ) : null}
    </div>
  );
};

export default SingleUserComment;

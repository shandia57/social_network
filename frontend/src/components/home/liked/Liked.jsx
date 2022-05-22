// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

// Import des fonctions JS du fichier SERVICES
import * as local from "../../../services/localStorage/AppLocalStorage";
import * as axios from "../../../services/axios/Like";

const Liked = (props) => {
  // On récupère l'ID de l'utilisateur pour pouvoir vérifier s'il fait partie des utilisateurs qu'ont liker la publcation
  const userId = local.getUserId();
  const isLiked = props.likes.includes(parseInt(userId));

  // On vérifier si l'utilisateur n'a pas liker, si oui on like la publication
  const handleLike = () => {
    if (!isLiked) {
      axios.insertLike(props.publication, userId);
      window.location.reload();
    }
  };
  return (
    <div className="publication-content-footer__like">
      <FontAwesomeIcon
        color={isLiked ? "red" : "grey"}
        className="publication__icon"
        icon={faHeart}
        onClick={handleLike}
      />
      <span className="publication-content-footer__span">
        {props.likes.length}
      </span>
    </div>
  );
};

export default Liked;

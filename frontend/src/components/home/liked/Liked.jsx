import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Liked = (props) => {
  return (
    <div className="publication-content-footer__like">
      <FontAwesomeIcon
        color="red"
        className="publication__icon"
        icon={faHeart}
      />
      <span className="publication-content-footer__span">{props.like}</span>
    </div>
  );
};

export default Liked;

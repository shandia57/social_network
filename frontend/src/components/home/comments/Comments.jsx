import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faComment } from "@fortawesome/free-solid-svg-icons";

const Comments = (props) => {
  return (
    <div
      className="publication-content-footer__comment"
      data-bs-toggle="modal"
      data-bs-target={`#exampleModal_${props.id}`}
      onClick={props.handleClickComments}
    >
      <FontAwesomeIcon
        color="#1f447b"
        className="publication__icon"
        icon={faComment}
      />
      <span className="publication-content-footer__span">{props.comments}</span>
    </div>
  );
};

export default Comments;

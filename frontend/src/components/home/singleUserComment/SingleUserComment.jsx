import "./css/style.css";

const SingleUserComment = (props) => {
  return (
    <div className="comment">
      <div className="comment-top">
        <div className="comment-bloc-left">
          <div className="comment--img">
            <img
              src={props.profile}
              alt={`${props.firstname} ${props.lastname}`}
            />
          </div>
          <div className="comment-user-info">
            {props.firstname} {props.lastname}
          </div>
        </div>
        <div className="comment-block-right">{props.published}</div>
      </div>

      <div className="comment-text">{props.text}</div>
    </div>
  );
};

export default SingleUserComment;

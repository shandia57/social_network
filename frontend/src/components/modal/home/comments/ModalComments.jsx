import SingleUserComment from "../../../home/singleUserComment/SingleUserComment";
import * as validation from "../../../../services/validations/Input";
import * as db from "../../../../services/axios/Comments";
import * as local from "../../../../services/localStorage/AppLocalStorage";
const ModalComments = (props) => {
  const handleSubmit = (event) => {
    const form = event.target;
    const validate = validation.isValideForm(form);
    if (validate) {
      const userId = local.getUserId();
      db.insertComment(form.comment.value, userId, props.publicationId);
    } else {
      event.preventDefault();
    }
  };

  return (
    <div
      className="modal fade"
      id={`exampleModal_${props.publicationId}`}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Commentaire de la publication n°{props.publicationId}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {props.comments.length > 0
              ? props.comments.map((comment) => (
                  <SingleUserComment
                    isAdmin={props.isAdmin}
                    key={comment.id}
                    firstname={comment.user.firstname}
                    lastname={comment.user.lastname}
                    profile={comment.user.profile}
                    published={comment.published}
                    text={comment.text}
                    commentId={comment.id}
                  />
                ))
              : "Aucun commentaire pour cette publication"}
          </div>
          <div className="modal-footer">
            <form onSubmit={handleSubmit}>
              <div class="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Rédiger un commentaire"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  name="comment"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComments;

// Components
import SingleUserComment from "../../../home/singleUserComment/SingleUserComment";

// Services
import * as validation from "../../../../services/validations/Input";
import * as axios from "../../../../services/axios/Comments";
import * as local from "../../../../services/localStorage/AppLocalStorage";

// css
import "./style.css";
const ModalComments = (props) => {
  // Fonction qui permet de récupérer le commentaire envoyé
  const handleSubmit = (event) => {
    const form = event.target;
    // On vérifie que le formulaire est valide
    const validate = validation.isValideForm(form);
    if (validate) {
      // Si oui, on récupère l'ID de l'utilisateur pour envoyer le commentaire en BDD qu'on liera également à la publication
      const userId = local.getUserId();
      axios.insertComment(form.comment.value, userId, props.publicationId);
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
            {/* On affiche tous les commentaires */}
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
          <div className="modal__footer">
            <form onSubmit={handleSubmit}>
              <div class="input-group w-100 p-3 mb-3">
                <input
                  type="text"
                  className="form-control  "
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

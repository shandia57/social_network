// Component
import InputFile from "../../../custom/inputFile/InputFile";

import * as axios from "../../../../services/axios/User";
import * as local from "../../../../services/localStorage/AppLocalStorage";

const ModalPhotoProfile = ({ photo }) => {
  // Fonction qui permet de récupérer le commentaire envoyé
  const handleSubmit = (event) => {
    // permet de ne pas envoyer le formulaire dans le vide
    event.preventDefault();

    const form = event.target;

    axios
      .updateUserPhoto(form.image.files[0], local.getUserId())
      .finally(() => {
        window.location.reload(false);
      })
      .catch((error) => {
        alert("Une erreur est survenu");
      });
  };

  return (
    <div
      className="modal fade"
      id="ModalPhoto"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modifier votre photo de profil
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <InputFile labelText="Modifier votre photo profil" />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
              <button type="submit" class="btn btn-primary">
                Sauvergarder les changements
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalPhotoProfile;

import { useNavigate } from "react-router-dom";

// Components
import LabelInput from "../../../custom/label-input/LabelInput";
import Spinner from "../../../layout/spinner/Spinner";

// Services
import * as validation from "../../../../services/validations/Input";
import * as axios from "../../../../services/axios/User";
import * as local from "../../../../services/localStorage/AppLocalStorage";

const ModalUserDetails = ({ firstname, lastname, birthday, email }) => {
  const navigate = useNavigate();

  // Fonction qui permet de récupérer les données envoyés
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // On vérifie que le formulaire est valide
    const valideForm = validation.isValideForm(form);

    // Si oui, on récupère l'ID de l'utilisateur pour envoyer les données en BDD
    if (valideForm) {
      axios
        .updateUser(form, local.getUserId())
        .finally(() => window.location.reload(false))
        .catch((error) => {
          alert("Les données saisies sont incorrectes");
        });
    }
  };

  // Fonction qui permet de supprimer le compte de l'utilisateur
  const deleteAccount = () => {
    let response = window.confirm(
      "Êtes-vous sûr de vouloir supprimer votre compte ?"
    );
    if (response) {
      axios
        .deleteUser(local.getUserId())
        .then((response) => {
          local.removeUserId();
          navigate("/auth");
        })
        .catch((error) => {
          alert("Oups, Une erreur est survenue");
        });
    }
  };
  // On vérifie si le state n'est pas undifined
  // Car il y a quelques problèmes de synchronisation entre le temps ou l'on récupère les données et le temps ou l'on affiche le modal
  if (firstname !== undefined) {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modifier vos informations
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
                <LabelInput
                  labelText="Prénom"
                  inputType="text"
                  inputName="firstname"
                  inputPlaceHolder="Votre Prénom"
                  initialValue={firstname}
                />

                <LabelInput
                  labelText="Nom"
                  inputType="text"
                  inputName="lastname"
                  inputPlaceHolder="Votre nom"
                  initialValue={lastname}
                />

                <LabelInput
                  labelText="Email"
                  inputType="email"
                  inputName="email"
                  inputPlaceHolder="Votre email"
                  initialValue={email}
                />

                <LabelInput
                  labelText="Date de naissance"
                  inputType="date"
                  inputName="birthday"
                  inputPlaceHolder=""
                  initialValue={birthday}
                />
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">
                  Sauvergarder les changements
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={deleteAccount}
                >
                  Supprimer le compte
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default ModalUserDetails;

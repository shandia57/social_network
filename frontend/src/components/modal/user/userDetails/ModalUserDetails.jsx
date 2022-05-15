import { useNavigate } from "react-router-dom";

import LabelInput from "../../../custom/label-input/LabelInput";
import Spinner from "../../../layout/spinner/Spinner";

import * as validation from "../../../../services/validations/Input";
import * as request from "../../../../services/axios/User";
import * as local from "../../../../services/localStorage/AppLocalStorage";

const ModalUserDetails = ({ firstname, lastname, birthday, email }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const valideForm = validation.isValideForm(form);
    if (valideForm) {
      request
        .updateUser(form, local.getUserId())
        .finally(() => window.location.reload(false))
        .catch((error) => {
          alert("Les données saisies sont incorrectes");
        });
    }
  };

  const deleteAccount = () => {
    let response = window.confirm(
      "Êtes-vous sûr de vouloir supprimer votre compte ?"
    );
    if (response) {
      request
        .deleteUser(local.getUserId())
        .then((response) => {
          local.removeUserId();
          navigate("/");
        })
        .catch((error) => {
          alert("Oups, Une erreur est survenue");
        });
    }
  };
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

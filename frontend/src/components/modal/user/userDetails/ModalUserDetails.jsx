import LabelInput from "../../../custom/label-input/LabelInput";
const ModalUserDetails = ({ firstname, lastname, birthday, email }) => {
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
          <form>
            <div className="modal-body">
              <LabelInput
                labelText="Nom"
                inputType="text"
                inputName="firstname"
                inputPlaceHolder="Votre nom"
                initialValue={lastname}
              />

              <LabelInput
                labelText="Prénom"
                inputType="text"
                inputName="lastname"
                inputPlaceHolder="Votre prénom"
                initialValue={firstname}
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

export default ModalUserDetails;

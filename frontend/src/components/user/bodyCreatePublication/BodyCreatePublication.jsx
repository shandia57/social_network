// React
import { useNavigate } from "react-router-dom";

// Components
import LabelInput from "../../custom/label-input/LabelInput";
import InputFile from "../../custom/inputFile/InputFile";
import ButtonSubmit from "../../custom/button/submit/ButtonSubmit";

// Services
import * as axios from "../../../services/axios/Publications";
import * as local from "../../../services/localStorage/AppLocalStorage";
import * as validation from "../../..//services/validations/Input";

// CSS
import "./css/style.css";
import "./css/style-mobile.css";

const BodyCreatePublication = (props) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // On empêche le rechargement de la page
    event.preventDefault();
    const form = event.target;
    // On vérifie que le formulaire est valide
    const validationForm = validation.isValideForm(form);
    if (validationForm) {
      // Si oui, on envoie la publication pour qu'elle soit ajouté en BDD
      const userId = local.getUserId();
      axios.createPublication(form, userId);
      navigate("/user");
    } else {
      alert("Le formulaire n'est pas valide");
    }
  };

  return (
    <div className="createPublication-app">
      <div className="createPublication-app-header">
        <h2>Ajouter une nouvelle publication</h2>
      </div>
      <div className="createPublication-app-body">
        <form onSubmit={handleSubmit}>
          <LabelInput
            initialValue={props.titleValue}
            labelText="*Titre"
            inputType="text"
            inputName="title"
            inputPlaceHolder="Titre de la publication"
          />

          <LabelInput
            initialValue={props.textValue}
            labelText="*Text"
            inputType="text"
            inputName="text"
            inputPlaceHolder="Texte de la publication"
          />

          <InputFile labelText="Ajouter une image" />
          <div className="createPublication-app-footer">
            <ButtonSubmit text="Ajouter cette publication" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BodyCreatePublication;

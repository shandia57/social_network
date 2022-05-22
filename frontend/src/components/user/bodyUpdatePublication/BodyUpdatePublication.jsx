// React
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Components
import LabelInput from "../../custom/label-input/LabelInput";
import UpdateImage from "../updateImage/UpdateImage";
import ButtonSubmit from "../../custom/button/submit/ButtonSubmit";
import Spinner from "../../layout/spinner/Spinner";

// Services
import * as axios from "../../../services/axios/Publications";
import * as validation from "../../..//services/validations/Input";

//  CSS
import "./css/style.css";
import "./css/style-mobile.css";

const BodyUpdatePublication = () => {
  // UseParams permet de récupérer les paramètres de l'url (donc de la route), ici on récupère l'ID de la publication
  const params = useParams();
  const navigate = useNavigate();
  const [publication, setPublication] = useState({});

  // On récupère la publication en BDD
  useEffect(() => {
    axios.getPublicationById(params.id).then((res) => {
      setPublication(res.data);
    });
  }, []);

  // On récupère les valeurs du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // On vérifie que le formulaire est valide
    const validationForm = validation.isValideForm(form);
    if (validationForm) {
      // Si oui, on envoie les données en BDD
      axios.updatePublication(form, params.id);
      navigate("/user");
    } else {
      alert("Le formulaire n'est pas valide");
    }
  };

  // On vérifie si le state n'est pas undifined, car il y a un problème de synchronisation entre le temps ou la page se charge
  // et le temps où les données sont récupérer des props
  if (publication.title === undefined) {
    return <Spinner />;
  } else {
    if (publication.title !== undefined) {
      return (
        <div className="updatePublication-app">
          <div className="updatePublication-app-header">
            <h2>{publication.title}</h2>
          </div>
          <div className="updatePublication-app-body">
            <form onSubmit={handleSubmit}>
              <LabelInput
                initialValue={publication.title}
                labelText="*Titre"
                inputType="text"
                inputName="title"
                inputPlaceHolder="Titre de la publication"
              />

              <LabelInput
                initialValue={publication.text}
                labelText="*Text"
                inputType="text"
                inputName="text"
                inputPlaceHolder="Texte de la publication"
              />
              <UpdateImage image={publication.image} />
              <div className="updatePublication-app-footer">
                <ButtonSubmit text="Enregistrer les modifications" />
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
};

export default BodyUpdatePublication;

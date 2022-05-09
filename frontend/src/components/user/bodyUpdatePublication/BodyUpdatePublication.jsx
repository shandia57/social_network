import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import LabelInput from "../../custom/label-input/LabelInput";
import UpdateImage from "../updateImage/UpdateImage";
import ButtonSubmit from "../../custom/button/submit/ButtonSubmit";
import Spinner from "../../layout/spinner/Spinner";

// Services
import * as db from "../../../services/axios/Publications";
import * as local from "../../../services/localStorage/AppLocalStorage";
import * as validation from "../../..//services/validations/Input";

//  CSS
import "./css/style.css";

const BodyUpdatePublication = () => {
  const params = useParams();
  const [publication, setPublication] = useState({});
  const [title, setTitle] = useState("");

  useEffect(() => {
    db.getPublicationById(params.id).then((res) => {
      setPublication(res.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const validationForm = validation.isValideForm(form);
    if (validationForm) {
      db.updatePublication(form, params.id);
    } else {
      console.log("form is not valide");
    }
  };
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

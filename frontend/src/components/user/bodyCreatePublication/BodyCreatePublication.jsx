import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LabelInput from "../../custom/label-input/LabelInput";
import InputFile from "../../custom/inputFile/InputFile";
import ButtonSubmit from "../../custom/button/submit/ButtonSubmit";
import * as db from "../../../services/axios/Publications";
import * as local from "../../../services/localStorage/AppLocalStorage";
import * as validation from "../../..//services/validations/Input";

import "./css/style.css";

const BodyCreatePublication = (props) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const validationForm = validation.isValideForm(form);
    if (validationForm) {
      const userId = local.getUserId();
      db.createPublication(form, userId);
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

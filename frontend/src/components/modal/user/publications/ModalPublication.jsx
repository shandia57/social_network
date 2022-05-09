import { useState, useEffect } from "react";

import LabelInput from "../../../custom/label-input/LabelInput";
import InputFile from "../../../custom/inputFile/InputFile";

import * as db from "../../../../services/axios/Publications";
import * as local from "../../../../services/localStorage/AppLocalStorage";
import * as validation from "../../../../services/validations/Input";

const ModalPublications = (props) => {
  const handleSubmit = (event) => {
    if (props.id) {
      console.log("Werenoi j'veux update");
    } else {
      event.preventDefault();
      const form = event.target;
      const validationForm = validation.isValideForm(form);
      if (validationForm) {
        const userId = local.getUserId();
        db.createPublication(form, userId);
      } else {
        console.log("form is not valide");
      }
    }
  };

  return (
    <div
      class="modal fade"
      id={props.modalId}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {props.title}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="modal-body">
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
                Ajouter la publication
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalPublications;

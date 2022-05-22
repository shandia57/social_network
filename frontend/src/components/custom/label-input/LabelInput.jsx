import { useState, useEffect } from "react";

// CSS
import "./css/style.css";
import "./css/style-mobile.css";

// Import du fichier qui permet la validation des INPUTS
import * as validation from "../../../services/validations/Input";

// On défini d'entrée le nom des props
const LabelInput = ({
  initialValue,
  labelText,
  inputType,
  inputName,
  inputPlaceHolder,
  setValuePassword,
  password,
}) => {
  // On déclare les STATES
  const [valueInput, setValueInput] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // On vérifie si valueInput existe (problème de synchronisation entre la page et le props)
    if (valueInput) {
      // On vérifie si la valueInput n'est pas vide (lorsqu'on charge la page pour ne pas avoir d'éntrée des messages d'érreurs)
      if (valueInput.length > 0) {
        // On vérifie si le stateSetValuePassowrd a été passé en tant que props pour pouvoir vérifier plus tard si les deux mots de passes correspondent
        if (setValuePassword) {
          setValuePassword(valueInput);
        }

        // Permet de vérifier si les inputs correspondent à la REGEX du fichier de validation
        const isValide = validation.valideKey(inputName, valueInput, password);
        if (isValide) {
          setErrorMessage("");
        } else {
          setErrorMessage(validation.getMessage(inputName));
        }
      }
    }
  }, [valueInput]);

  return (
    <div className="containerLabelInput">
      <label>{labelText}</label>
      <input
        value={valueInput}
        onChange={(event) => setValueInput(event.target.value)}
        type={inputType}
        name={inputName}
        placeholder={inputPlaceHolder}
        required
      />
      <div>{errorMessage}</div>
    </div>
  );
};
export default LabelInput;

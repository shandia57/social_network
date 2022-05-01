import {useState, useEffect} from "react";

import "./css/style.css";
import "./css/style-mobile.css";

import * as validation from "../../../services/validations/Input";

const LabelInput = (props) => {

    const [valueInput, setValueInput] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const {
        labelText,
        inputType, 
        inputName, 
        inputPlaceHolder,
        setValuePassword,
        password
    } = props;


    useEffect(() => {
        if(valueInput.length > 0) {
            if(setValuePassword) {
                setValuePassword(valueInput);
            }
            const isValide = validation.valideKey(inputName, valueInput, password);
            if(isValide) {
                setErrorMessage("");
            } else {
                setErrorMessage(validation.getMessage(inputName));
            }


        }
    }, [valueInput])
    return (
        <div className="containerLabelInput">
            <label >{labelText}</label>
            <input
                onChange={(event) => setValueInput(event.target.value)}
                type={inputType} 
                name={inputName} 
                placeholder={inputPlaceHolder}
                required
            />
            <div>{errorMessage}</div>
        </div>
    )
}
export default LabelInput;
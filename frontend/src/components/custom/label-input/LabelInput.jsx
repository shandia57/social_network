import "./css/style.css";

const LabelInput = (props) => {


    const {
        labelText,
        inputType, 
        inputName, 
        inputPlaceHolder
    } = props;

    return (
        <div className="containerLabelInput">
            <label >{labelText}</label>
            <input 
                type={inputType} 
                name={inputName} 
                placeholder={inputPlaceHolder}
                required
            />
        </div>
    )
}
export default LabelInput;
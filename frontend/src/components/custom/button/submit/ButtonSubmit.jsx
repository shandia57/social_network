import "./css/style.css";


const ButtonSubmit = (props) => {
    const {
        text
    } = props;
    
    return (
        <button type="submit"  className="black-button">{text}</button>
    );
}

export default ButtonSubmit;
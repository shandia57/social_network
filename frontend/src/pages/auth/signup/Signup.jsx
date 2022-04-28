import {Link} from "react-router-dom";

// images
import logo from "./../../../images/logo/logo.svg"

// css
import "./css/style.css";
import "./css/style-mobile.css";
import "./css/style-tab.css";

// custom components
import ButtonSubmit from "../../../components/custom/button/submit/ButtonSubmit";
import LabelInput from "../../../components/custom/label-input/LabelInput";


const Signup = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit");
    }

    return (
        <div className="signup-page">
            <div className="container-img">
                <Link to="/auth"> 
                    <img src={logo} alt="" /> 
                </Link>
                
            </div>

            <div className="container-title-form">
            <h1 className="text-center">Créer un compte</h1>
            <p className="text-center">Vous n'êtes pas encore enregistré ? Inscrivez-vous !</p>

            <form onSubmit={handleSubmit}>
                   <div className="signUpForm">
                   <LabelInput  
                        labelText="Nom"
                        inputType="text"
                        inputName="firstname"
                        inputPlaceHolder="Votre nom"
                    />

                    <LabelInput  
                        labelText="Prénom"
                        inputType="text"
                        inputName="lastname"
                        inputPlaceHolder="Votre prénom"
                    />

                    <LabelInput  
                        labelText="Email"
                        inputType="email"
                        inputName="email"
                        inputPlaceHolder="Votre email"
                    />

                    <LabelInput  
                        labelText="Date de naissance"
                        inputType="date"
                        inputName="birthdate"
                        inputPlaceHolder=""
                    />

                    <LabelInput  
                        labelText="Mot de passe"
                        inputType="password"
                        inputName="password"
                        inputPlaceHolder="Votre mot de passe"
                    />

                    <LabelInput  
                        labelText="Confirmation du mot de passe"
                        inputType="password"
                        inputName="passwordConfirm"
                        inputPlaceHolder="Confirmez le mot de passe"
                    />
                    <ButtonSubmit text="Inscription" />
                   </div>
            </form>
            </div>
        </div>
    );
}

export default Signup;
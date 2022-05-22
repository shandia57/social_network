import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// images
import logo from "./../../../images/logo/logo.svg";

// css
import "./css/style.css";
import "./css/style-mobile.css";
import "./css/style-tab.css";

// custom components
import ButtonSubmit from "../../../components/custom/button/submit/ButtonSubmit";
import LabelInput from "../../../components/custom/label-input/LabelInput";

// Services functions
import * as validation from "../../../services/validations/Input";
import * as axios from "../../../services/axios/User";
import * as local from "../../../services/localStorage/AppLocalStorage";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [success, Setsuccess] = useState("");
  const navigate = useNavigate();

  // On récupère les données du formulaire de création de compte
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // On vérifie que le formulaire est valide
    const valideForm = validation.isValideForm(form);

    if (valideForm) {
      // Si oui, on crée le compte
      axios
        .createUser(form)
        .then((response) => {
          Setsuccess("Votre compte a été créée avec succès");
          // On regirige vers la page de connextion lorque le compte a été créé
          navigate("/auth/signin");
        })
        .catch((error) => {
          alert("Votre compte n'a pas pu être créée");
          Setsuccess("");
        });
    }
  };

  // On redirige l'utilisateur si son ID n'est pas trouvé dans le localStorage
  // Soit il est déjà connecté, soit il n'a pas encore de compte
  useEffect(() => {
    const id = local.getUserId();
    if (id) navigate("/home");
  }, []);

  return (
    <div className="signup-page">
      <div className="container-img">
        <Link to="/auth">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="container-title-form">
        <h1 className="text-center">Créer un compte</h1>
        <p className="text-center">
          Vous n'êtes pas encore enregistré ? Inscrivez-vous !
        </p>
        <p className="text-center success !">{success}</p>
        <form onSubmit={handleSubmit}>
          <div className="signUpForm">
            <LabelInput
              labelText="Nom"
              inputType="text"
              inputName="lastname"
              inputPlaceHolder="Votre nom"
            />

            <LabelInput
              labelText="Prénom"
              inputType="text"
              inputName="firstname"
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
              inputName="birthday"
              inputPlaceHolder=""
            />

            <LabelInput
              labelText="Mot de passe"
              inputType="password"
              inputName="password"
              inputPlaceHolder="Votre mot de passe"
              setValuePassword={setPassword}
            />

            <LabelInput
              labelText="Confirmation du mot de passe"
              inputType="password"
              inputName="passwordConfirm"
              inputPlaceHolder="Confirmez le mot de passe"
              password={password}
            />
            <ButtonSubmit text="Inscription" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// React
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

// Logo
import logo from "./../../../images/logo/logo.svg";

// CSS
import "./css/style.css";
import "./css/style-mobile.css";
import "./css/style-tab.css";

// Component
import ButtonSubmit from "../../../components/custom/button/submit/ButtonSubmit";
import LabelInput from "../../../components/custom/label-input/LabelInput";

// Services functions
import * as validation from "../../../services/validations/Input";
import * as axios from "../../../services/axios/Auth";
import * as local from "../../../services/localStorage/AppLocalStorage";

const Signin = () => {
  const navigate = useNavigate();

  // Peremt de récupérer les données du formulaire de connexion
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // On vérifie que le formulaire est valide
    const valideForm = validation.isValideForm(form);
    if (valideForm) {
      // Si oui, on connecte l'utilisateur
      axios
        .loginUser(form)
        .then((response) => {
          if (response.status === 200) {
            // Si la connexion est réussie, on stocke les données de l'utilisateur dans le localStorage
            local.setUserId(response.data.userId);
            navigate("/home");
          }
        })
        .catch((error) => {
          alert("Echec de connexion");
        });
    } else {
      alert("Echec de connexion");
    }
  };

  // On redirige l'utilisateur si son ID n'est pas trouvé dans le localStorage
  // Soit il est déjà connecté, soit il n'a pas encore de compte
  useEffect(() => {
    const id = local.getUserId();
    if (id) navigate("/home");
  }, []);
  return (
    <div className="signin-page">
      <div className="container-img">
        <Link to="/auth">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="signin-page-mainContainer">
        <h1 className="text-center">Se connecter</h1>
        <p className="text-center">Connectez vous pour continuer</p>

        <form onSubmit={handleSubmit}>
          <div className="signinForm">
            <LabelInput
              labelText="Email"
              inputType="email"
              inputName="email"
              inputPlaceHolder="Votre adresse email"
            />

            <LabelInput
              labelText="Mot de passe"
              inputType="password"
              inputName="password"
              inputPlaceHolder="Votre mot de passe"
            />

            <ButtonSubmit text="Connexion" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;

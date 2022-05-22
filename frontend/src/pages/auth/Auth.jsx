// React
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Component
import BlackLink from "../../components/custom/link/BlackLink";

// CSS
import "./css/style.css";
import "./css/style-mobile.css";
import "./css/style-tab.css";

// Logo de l'entrepruse
import logo from "../../images/logo/logo.svg";

// Services
import * as local from "../../services/localStorage/AppLocalStorage";

const Auth = () => {
  const navigate = useNavigate();

  // On redirige l'utilisateur si son ID n'est pas trouvé dans le localStorage
  // Soit il est déjà connecté, soit il n'a pas encore de compte
  useEffect(() => {
    const id = local.getUserId();
    if (id) navigate("/home");
  }, []);
  return (
    <div className="authPage">
      <div className="col-auth col-auth-left">
        <img src={logo} alt="Groupomania-logo" />
      </div>

      <div className="col-auth col-auth-right text-center">
        <h1>Rejoignez-nous dès maintenant ! </h1>

        <div className="auth-container-buttons">
          <BlackLink to="/auth/signup" text="Inscription" />
          <BlackLink to="/auth/signin" text="Connexion" />
        </div>

        <p className="auth-footer">
          Groupomania Siege social 18 route des champs 48720 Salbinor
        </p>
      </div>
    </div>
  );
};
export default Auth;

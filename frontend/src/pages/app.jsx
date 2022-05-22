import { useEffect } from "react";
import Spinner from "../components/layout/spinner/Spinner";
import { useNavigate } from "react-router-dom";

import * as local from "../services/localStorage/AppLocalStorage";

// Ce fichier permet de détecter lorsque l'utilisateur lance l'application, de le rediriiger vers la page de connexion / page d'accueil
const App = () => {
  const navigate = useNavigate();
  const userId = local.getUserId();
  useEffect(() => {
    if (userId) {
      navigate("/home");
    } else {
      navigate("/auth");
    }
  }, []);

  return (
    <div>
      <Spinner />
    </div>
  );
};

export default App;

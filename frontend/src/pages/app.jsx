import { useEffect } from "react";
import Spinner from "../components/layout/spinner/Spinner";
import { useNavigate } from "react-router-dom";

import * as local from "../services/localStorage/AppLocalStorage";

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

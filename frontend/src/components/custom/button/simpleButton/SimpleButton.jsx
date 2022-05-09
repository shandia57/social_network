import "./css/style.css";
import { useNavigate } from "react-router-dom";

const SimpleButton = (props) => {
  const navigate = useNavigate();
  return (
    <div className="simple-button">
      <button
        type="button"
        onClick={() => navigate(props.navigate)}
        className={`btn btn-info ${props.class}`}
      >
        {props.text}
      </button>
    </div>
  );
};
export default SimpleButton;

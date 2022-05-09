import { useNavigate } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const RowPublication = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <tr>
        <td>{props.title}</td>
        <td>{props.published}</td>
        <td>{props.liked}</td>
        <td>
          <FontAwesomeIcon
            onClick={() => {
              navigate("/user/publication/" + props.id);
            }}
            icon={faEdit}
          />
        </td>
      </tr>
    </>
  );
};

export default RowPublication;

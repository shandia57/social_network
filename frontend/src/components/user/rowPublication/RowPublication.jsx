import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// services
import * as axios_like from "../../../services/axios/Like";
import * as axios_publication from "../../../services/axios/Publications";

const RowPublication = (props) => {
  const navigate = useNavigate();
  const [likes, setLikes] = useState(0);

  // Permet de récupérer les like par rapport à une publication
  useEffect(() => {
    axios_like.getLikeByPublicationId(props.id).then((response) => {
      setLikes(response.data.length);
    });
  });

  // Permet de supprimer une publication
  const handleDelete = () => {
    const confirmation = window.confirm(
      "Voulez-vous vraiment supprimer cette publication ?"
    );
    if (confirmation) {
      axios_publication.deletePublication(props.id).then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <>
      <tr>
        <td>{props.title}</td>
        <td>{props.published}</td>
        <td>{likes}</td>
        <td>
          <FontAwesomeIcon
            className="cursorPointer"
            onClick={() => {
              navigate("/user/publication/" + props.id);
            }}
            icon={faEdit}
          />
        </td>
        <td>
          <FontAwesomeIcon
            className="cursorPointer"
            color="red"
            icon={faTrashAlt}
            onClick={handleDelete}
          />
        </td>
      </tr>
    </>
  );
};

export default RowPublication;

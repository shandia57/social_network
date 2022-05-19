import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// services
import * as db from "../../../services/axios/Like";
import * as db_publication from "../../../services/axios/Publications";

const RowPublication = (props) => {
  const navigate = useNavigate();
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    db.getLikeByPublicationId(props.id).then((response) => {
      setLikes(response.data.length);
    });
  });

  const handleDelete = () => {
    const confirmation = window.confirm(
      "Voulez-vous vraiment supprimer cette publication ?"
    );
    if (confirmation) {
      db_publication.deletePublication(props.id).then(() => {
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
            onClick={() => {
              navigate("/user/publication/" + props.id);
            }}
            icon={faEdit}
          />
        </td>
        <td>
          <FontAwesomeIcon
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

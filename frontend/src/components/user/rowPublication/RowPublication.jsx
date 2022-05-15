import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

// services
import * as db from "../../../services/axios/Like";

const RowPublication = (props) => {
  const navigate = useNavigate();
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    db.getLikeByPublicationId(props.id).then((response) => {
      setLikes(response.data.length);
    });
  });

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
      </tr>
    </>
  );
};

export default RowPublication;

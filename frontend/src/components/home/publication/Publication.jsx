import { useState, useEffect } from "react";

// CSS
import "./css/style.css";

// Components
import HeaderProfile from "../../custom/headerProfile/HeaderProfile";
import SimpleButton from "../../custom/button/simpleButton/SimpleButton";
import Comments from "../comments/Comments";
import Liked from "../liked/Liked";
import ModalComments from "../../modal/home/comments/ModalComments";
import Spinner from "../../layout/spinner/Spinner";
// Services
import * as local from "../../../services/localStorage/AppLocalStorage";
import * as db from "../../../services/axios/Comments";
import * as db_like from "../../../services/axios/Like";

const Publication = (props) => {
  const [comments, setComments] = useState([]);
  const [userLiked, setUserLiked] = useState([]);

  const handleClickComments = () => {
    db.getCommentsByPublicationId(props.publicationId).then((res) => {
      setComments(res.data);
    });
  };

  useEffect(() => {
    if (props.publicationId !== undefined) {
      db_like.getLikeByPublicationId(props.publicationId).then((res) => {
        const array = [];
        res.data.forEach((user) => {
          array.push(user.user.id);
        });
        setUserLiked(array);
      });
    }
  }, []);
  if (props.publicationId !== undefined) {
    return (
      <>
        <div className="publication__content">
          <div className="publication-content-header">
            <HeaderProfile
              firstname={props.firstname}
              lastname={props.lastname}
              profile={props.profile}
              published={props.published}
            />
            {local.getUserId() == props.userId ? (
              <SimpleButton text="modifier la publication" />
            ) : null}
          </div>
          <hr />
          <div className="publication-content-body">
            <h2 className="publication-content-body__title">{props.title}</h2>
            <p>{props.text}</p>
            <div className="publication-content-body__img">
              {props.image !== null ? (
                <img src={props.image} alt="image" />
              ) : null}
            </div>
          </div>
          <hr />
          <div className="publication-content-footer">
            <Liked publication={props.publicationId} likes={userLiked} />
            <Comments
              handleClickComments={handleClickComments}
              id={props.publicationId}
              comments={props.comments}
            />
          </div>
        </div>

        <ModalComments
          comments={comments}
          publicationId={props.publicationId}
        />
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default Publication;

import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import * as local from "../../../services/localStorage/AppLocalStorage";
import * as db from "../../../services/axios/Like";

const userId = local.getUserId();

const Liked = (props) => {
  const isLiked = props.likes.includes(parseInt(userId));
  const handleLike = () => {
    if (!isLiked) {
      db.insertLike(props.publication, userId);
      window.location.reload();
    }
  };

  return (
    <div className="publication-content-footer__like">
      <FontAwesomeIcon
        color={isLiked ? "red" : "grey"}
        className="publication__icon"
        icon={faHeart}
        onClick={handleLike}
      />
      <span className="publication-content-footer__span">
        {props.likes.length}
      </span>
    </div>
  );
};

export default Liked;

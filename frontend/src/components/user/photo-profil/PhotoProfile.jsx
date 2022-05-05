import ModalPhotoProfile from "./../../modal/user/PhotoProfile/ModalPhotoProfile";
import * as local from "../../../services/localStorage/AppLocalStorage";

const PhotoProfile = () => {
  return (
    <>
      <div className="tile text-center">
        <h3 className="title-title">Photo de profil</h3>
        <img
          className=""
          src="https://avatars.githubusercontent.com/u/90464110?v=4"
          alt="User Image"
        />
        <form className="form-horizontal">
          <button
            type="button"
            className="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#ModalPhoto"
          >
            Modifier
          </button>
        </form>
      </div>
      <ModalPhotoProfile />
    </>
  );
};

export default PhotoProfile;

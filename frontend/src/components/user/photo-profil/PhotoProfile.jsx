const PhotoProfile = () => {
  return (
    <div className="tile text-center">
      <h3 className="title-title">Photo de profil</h3>
      <img
        className=""
        src="https://avatars.githubusercontent.com/u/90464110?v=4"
        alt="User Image"
      />
      <form className="form-horizontal">
        <button type="submit" className="btn btn-info">
          Modifier
        </button>
      </form>
    </div>
  );
};

export default PhotoProfile;

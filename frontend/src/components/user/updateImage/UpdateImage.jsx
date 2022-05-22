// Component
import InputFile from "../../custom/inputFile/InputFile";

// CSS
import "./css/style.css";

const UpdateImage = (props) => {
  // On affiche une image si elle existe pour la publication

  if (props.image === null) {
    return <InputFile labelText="Ajouter une image" />;
  } else {
    return (
      <div className="container-update-image">
        <label>Modifier l'image</label>
        <img src={props.image} alt="image" />
        <input type="file" name="image" />
      </div>
    );
  }
};
export default UpdateImage;

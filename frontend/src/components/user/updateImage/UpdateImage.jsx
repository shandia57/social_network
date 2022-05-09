import InputFile from "../../custom/inputFile/InputFile";
import "./css/style.css";
const UpdateImage = (props) => {
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

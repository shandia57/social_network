import "./css/style.css";

const InputFile = (props) => {
  return (
    <div className="input-file">
      <label>{props.labelText}</label>
      <input type="file" name="image" />
    </div>
  );
};

export default InputFile;

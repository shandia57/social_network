import "./css/style.css";

const SimpleButton = (props) => {
  return (
    <div className="simple-button">
      <button type="button" className="btn btn-info">
        {props.text}
      </button>
    </div>
  );
};
export default SimpleButton;

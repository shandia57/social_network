import "./css/style.css";

const SimpleButton = (props) => {
  return (
    <div className="simple-button">
      <button
        type="button"
        data-bs-toggle={props.toggle}
        data-bs-target={props.target}
        className={`btn btn-info ${props.class}`}
      >
        {props.text}
      </button>
    </div>
  );
};
export default SimpleButton;

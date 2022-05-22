import "./css/style.css";

// Peremt d'afficher un spinner lorsque la page est en cours de chargement
const Spinner = () => {
  return (
    <div className="container">
      <div className="spinners">
        <div className="spinner-block">
          <div className="spinner spinner-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;

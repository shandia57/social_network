const Publications = () => {
  return (
    <div className="tile pb-5">
      <h3 className="tile-title">Historique des publications</h3>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-sm">
          <thead>
            <tr>
              <th className="app-principal-color">Titre</th>
              <th className="app-principal-color">Nombre de commentaire</th>
              <th className="app-principal-color">Nombre de like</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Comment trouver un paktarus ?</td>
              <td>50</td>
              <td>20</td>
            </tr>

            <tr>
              <td>Comment trouver un paktarus ?</td>
              <td>50</td>
              <td>20</td>
            </tr>

            <tr>
              <td>Comment trouver un paktarus ?</td>
              <td>50</td>
              <td>20</td>
            </tr>

            <tr>
              <td>Comment trouver un paktarus ?</td>
              <td>50</td>
              <td>20</td>
            </tr>

            <tr>
              <td>Comment trouver un paktarus ?</td>
              <td>50</td>
              <td>20</td>
            </tr>

            <tr>
              <td>Comment trouver un paktarus ?</td>
              <td>50</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <nav className="float-end">
        <ul className="pagination">
          <li className="page-item disabled">
            <span className="page-link">&laquo;</span>
          </li>
          <li className="page-item active" aria-current="page">
            <span className="page-link">
              1<span className="sr-only">(current)</span>
            </span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              &raquo;
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Publications;

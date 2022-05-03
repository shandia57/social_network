import MultipleBreadCrumb from "../../components/layout/breadcrumb/multiples/MultipleBreadCrumb";
import Aside from "../../components/layout/aside/Aside";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const User = () => {
  return (
    <div className="app">
      <Aside />
      <div className="app-content">
        <MultipleBreadCrumb
          title="Prenom NOM"
          icon={faUser}
          linkName="Mon profil"
          path="/user"
        />

        <div className="row">
          <div className="col-md-4">
            <div className="tile">
              <h3 className="title-title mb-4">Photo de profil</h3>
              <img
                className="app-sidebar__user-avatar"
                src="https://avatars.githubusercontent.com/u/90464110?v=4"
                alt="User Image"
              />
              <form className="form-horizontal">
                <div className="row">
                  <div className="offset-md-6 col-md-8">
                    <button type="submit" className="btn btn-success">
                      <i className="fa fa-save"></i>Modifier
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="tile">
              {/* Créer un component Table */}
              <table className="table table-striped table-bordered table-sm">
                <tbody>
                  <tr>
                    <th>Prénom</th>
                    <td>Gerlus</td>
                  </tr>
                  <tr>
                    <th>Nom</th>
                    <td>PAKTARUS</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>gerlus@paktarus.com</td>
                  </tr>

                  <tr>
                    <th>Date de naissance</th>
                    <td>03/12/1996</td>
                  </tr>

                  <tr>
                    <th>Métier</th>
                    <td>Full Stack</td>
                  </tr>
                </tbody>
              </table>

              <a href="form.html" className="btn btn-info">
                <i className="fa fa-pencil"></i>Modifier
              </a>
            </div>
          </div>

          {/* Créer un component */}
          <div className="col-md-8">
            <div className="tile pb-5">
              <h3 className="tile-title">Historique des publications</h3>
              <div className="table-responsive">
                <table className="table table-striped table-hover table-sm">
                  <thead>
                    <tr>
                      <th>Titre</th>
                      <th>Nombre de commentaire</th>
                      <th>Nombre de like</th>
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
              <nav className="float-right">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

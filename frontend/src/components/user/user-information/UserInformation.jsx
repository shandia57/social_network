import ModalUserDetails from "./../../modal/user/userDetails/ModalUserDetails";
import * as local from "../../../services/localStorage/AppLocalStorage";
const UserInformation = (props) => {
  return (
    <>
      <div className="tile">
        <table className="table table-striped table-bordered table-sm">
          <tbody>
            <tr>
              <th>Prénom</th>
              <td>{props.firstname}</td>
            </tr>
            <tr>
              <th>Nom</th>
              <td>{props.lastname}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{props.email}</td>
            </tr>

            <tr>
              <th>Date de naissance</th>
              <td>{props.birthday}</td>
            </tr>

            <tr>
              <th>Métier</th>
              <td>Full Stack</td>
            </tr>
          </tbody>
        </table>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Modifier
          </button>
        </div>
      </div>
      <ModalUserDetails
        firstname={props.firstname}
        lastname={props.lastname}
        email={props.email}
        birthday={props.birthday}
      />
    </>
  );
};

export default UserInformation;

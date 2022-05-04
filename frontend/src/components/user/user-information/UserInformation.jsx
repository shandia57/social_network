import ModalUserDetails from "./../../modal/user/userDetails/ModalUserDetails";
import * as local from "../../../services/localStorage/AppLocalStorage";
const UserInformation = () => {
  const firstname = local.getUserFirstName();
  const lastname = local.getUserLastName();
  const email = local.getUserEmail();
  const birthday = local.getUserBirthday();

  return (
    <>
      <div className="tile">
        <table className="table table-striped table-bordered table-sm">
          <tbody>
            <tr>
              <th>Prénom</th>
              <td>{firstname}</td>
            </tr>
            <tr>
              <th>Nom</th>
              <td>{lastname}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{email}</td>
            </tr>

            <tr>
              <th>Date de naissance</th>
              <td>{birthday}</td>
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
        firstname={firstname}
        lastname={lastname}
        email={email}
        birthday={birthday}
      />
    </>
  );
};

export default UserInformation;

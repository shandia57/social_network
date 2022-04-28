import logo from "../../images/logo/logo.svg";
import "./css/style.css";
import "./css/style-mobile.css";
import "./css/style-tab.css";



import BlackLink from "../../components/custom/link/BlackLink";
const Auth = () => {
    return (
        <div className="authPage">
           <div className="col-auth col-auth-left">
                <img src={logo} alt="Groupomania-logo" />
            </div>

            <div className="col-auth col-auth-right text-center">
                <h1>Rejoignez-nous dès maintenant ! </h1>

                <div className="auth-container-buttons">
                    <BlackLink to="/auth/signup"  text="Inscription" />
                    <BlackLink to="/auth/signin"  text="Connexion" />
                </div>

                <p className="auth-footer">Groupomania Siege social 18 route des champs 48720 Salbinor</p>
            </div>
        </div>
    );
}
export default Auth;
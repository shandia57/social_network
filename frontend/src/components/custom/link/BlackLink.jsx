import { Link } from 'react-router-dom';
import "./css/style.css";


const BlackLink = (props) => {
    const {
        to,
        text
    } = props;
    
    return (
        <Link to={to} className="link-button">{text}</Link>
    );
}

export default BlackLink;
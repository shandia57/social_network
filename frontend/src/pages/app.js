import { useEffect } from "react";
import Spinner from '../components/layout/spinner/Spinner';
import { useNavigate } from 'react-router-dom';
const App = () => {
    const navigate = useNavigate();


    useEffect(() => {
        if (localStorage.getItem("userId")) {
            navigate("/homepage");

        } else {
            navigate("/auth");
        }
    }, [])


    return (
        <div>
            <Spinner />
        </div>
    );
}

export default App;
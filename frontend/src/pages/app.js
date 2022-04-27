import { useEffect } from "react";
import Spinner from '../components/layout/spinner/Spinner';
import { useNavigate } from 'react-router-dom';
const App = () => {
    const navigate = useNavigate();


    useEffect(() => {
        navigate("/auth");
    }, [])


    return (
        <div>
            <h1>Hello World</h1>
            <p>This is my first react app</p>
            <Spinner />
        </div>
    );
}

export default App;
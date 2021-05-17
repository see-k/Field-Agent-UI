import { useContext, useState} from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import AuthContext from "./AuthContext";
import Errors from "./Errors";

function Login() {
    const auth = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const location = useLocation();
    const { state: { from } = { from : '/'}} = location;
    const [errors, setErrors] = useState([]);
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            await auth.authenticate(username, password);
            history.push(from);
        }catch(err){
            setErrors([err.message]);
        }
    }

    return (
        <div> 
            <h2> Login </h2> 
                <Errors errors={errors} />
            <form onSubmit={handleSubmit}>
                <fieldset>
                <div className="form-group">
                    <label className="form-label mt-4">Username:  </label>
                    <input type="text" onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <label>Password:  </label>
                    <input type="password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div>
                    <br></br>
                    <button type="submit" className="btn btn-outline-primary">Login</button>
                    <Link to={from} className="btn btn-outline-danger">Cancel</Link>
                    <Link to="/register" className="btn btn-outline-warning">Register new account</Link>
                </div>
                </fieldset>
            </form>
        </div>
    );
};
export default Login;
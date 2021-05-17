import AuthContext from './AuthContext';
import {useContext, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Errors from './Errors';

function Register(){
    const auth = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/create_account', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            if (response.status === 201) {
                try {
                    await auth.authenticate(username, password);
                    history.push('/');
                } catch (err) {
                    throw new Error('Unknown Error');
                }
            } else if (response.status === 400){
                throw new Error('This account already exists');
            } else {
                throw new Error('Unknown Error');
            }
        } catch (err){
            setErrors([err.message]);
        }
    }
    return(
        <div>
            <h2>Register</h2>
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
                    <button type="submit" className="btn btn-outline-primary">Register</button>
                    <Link to={'/login'} className="btn btn-outline-danger">Already have an existing account</Link>
                </div>
                </fieldset>
            </form>
        </div>
    );
}

export default Register;
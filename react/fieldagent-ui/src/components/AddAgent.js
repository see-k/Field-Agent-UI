import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function AddAgent({addAgent}) {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [heightInInches, setHeightInInches] = useState(0);
    const history = useHistory();

    const handleAddAgent = (event) => {
        event.preventDefault();
        event.stopPropagation();

        let canAddAgent = true;


        if (firstName.trim().length === 0 ||
            middleName.trim().length === 0||
            lastName.trim().length === 0) {
            canAddAgent = false;
        }

        if(canAddAgent){
            let agent = {};
            agent["firstName"] = firstName;
            agent["middleName"] = middleName;
            agent["lastName"] = lastName;
            agent["dob"] = dob;
            agent["heightInInches"] = heightInInches;
            addAgent(agent);
            history.push('/agents');
        }
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleMiddleNameChange = (event) => {
        setMiddleName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleDobChange = (event) => {
        setDob(event.target.value);
    }

    const handleHeightInInchesChange = (event) => {
        setHeightInInches(event.target.value);
    } 

    return(

        <div className="card text-white border-primary mb-3">
            <div className="card-header"><p className="text-warning">FIELD AGENT FORM </p></div>
            <div className="card-body">
                <form onSubmit={handleAddAgent}>
                    <fieldset>
                        <legend><p className="text-primary"> ADD AGENT </p></legend>
                        <div className="form-group">
                            <label for="firstNameTextBox" className="form-label mt-4">First Name</label>
                            <input type="text" className="form-control" id="firstNameTextBox" onChange={handleFirstNameChange} aria-describedby="firstNameHelp" placeholder="Enter your first name" />
                            <small id="firstNameHelp" className="form-text text-muted">This field cannot be empty</small>
                        </div>
                        <div className="form-group">
                            <label for="middleNameTextBox" className="form-label mt-4">Middle Name</label>
                            <input type="text" className="form-control" id="middleNameTextBox" onChange={handleMiddleNameChange} aria-describedby="middleNameHelp" placeholder="Enter your middle name" />
                            <small id="middleNameHelp" className="form-text text-muted">This field cannot be empty</small>
                        </div>
                        <div className="form-group">
                            <label for="lastNameTextBox" className="form-label mt-4">Last Name</label>
                            <input type="text" className="form-control" id="lasttNameTextBox" onChange={handleLastNameChange} aria-describedby="lastNameHelp" placeholder="Enter your last name" />
                            <small id="lastNameHelp" className="form-text text-muted">This field cannot be empty</small>
                        </div>
                        <div className="form-group">
                            <label for="dobTextBox" className="form-label mt-4">Date of Birth</label>
                            <input type="text" className="form-control" id="dobTextBox" onChange={handleDobChange} aria-describedby="dobHelp" placeholder="yyyy-mm-dd" />
                            <small id="dobHelp" className="form-text text-muted">This field cannot be empty</small>
                        </div>
                        <div className="form-group">
                            <label for="heightInInchesTextBox" className="form-label mt-4">Height in Inches</label>
                            <input type="text" className="form-control" id="heightInInchesTextBox" onChange={handleHeightInInchesChange} aria-describedby="heightInInchesHelp" placeholder="Enter your height in inches" />
                            <small id="heightInInchesHelp" className="form-text text-muted">This field cannot be empty</small>
                        </div>
                        <button type="submit" className="btn btn-outline-warning">Submit</button>
                    
                    </fieldset>
                </form>
            </div>
        </div>

    );
}
export default AddAgent;
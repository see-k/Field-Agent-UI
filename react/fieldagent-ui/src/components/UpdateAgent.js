import { useEffect, useState } from 'react';

function UpdateAgent({agent, updateView}){
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [heightInInches, setHeightInInches] = useState(0);


    async function handleUpdate(evt){
        evt.preventDefault();

        const newAgent = {
            agentId: agent.agentId,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            dob: dob,
            heightInInches: heightInInches

        }

        const init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newAgent)
        };

            fetch(`http://localhost:8080/api/agent/${newAgent.agentId}`, init)
            .then(response => {
                if(response.status !== 204){
                    return Promise.reject(`Update Failed`);
                    
                }
            })
            .then(updateView(newAgent))
            .catch(console.log)
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


    return (
             <form onSubmit={handleUpdate}>
                    <fieldset>
                        <legend><p className="text-primary"> UPDATE AGENT FORM </p></legend>
                        <div className="form-group">
                            <label for="agentIdTextBox" className="form-label mt-4">Agent ID</label>
                            <input type="text" className="form-control" id="agentIdTextBox" readOnly="readOnly" aria-describedby="agentIdHelp" placeholder="Enter the agent's Id" value={agent.agentId} />
                            <small id="agentIdHelp" className="form-text text-muted">This field cannot be empty</small>
                        </div>
                        <div className="form-group">
                            <label for="firstNameTextBox" className="form-label mt-4">First Name</label>
                            <input type="text" className="form-control" id="firstNameTextBox" onChange={handleFirstNameChange} aria-describedby="firstNameHelp" placeholder="Enter your first name" defaultValue={agent.firstName}/>
                            <small id="firstNameHelp" className="form-text text-muted">This field cannot be empty</small>
                        </div>
                        <div className="form-group">
                            <label for="middleNameTextBox" className="form-label mt-4">Middle Name</label>
                            <input type="text" className="form-control" id="middleNameTextBox" onChange={handleMiddleNameChange} aria-describedby="middleNameHelp" placeholder="Enter your middle name" defaultValue={agent.middleName}/>
                            <small id="middleNameHelp" className="form-text text-muted">This field cannot be empty</small>
                        </div>
                        <div className="form-group">
                            <label for="lastNameTextBox" className="form-label mt-4">Last Name</label>
                            <input type="text" className="form-control" id="lasttNameTextBox" onChange={handleLastNameChange} aria-describedby="lastNameHelp" placeholder="Enter your last name" defaultValue={agent.lastName}/>
                            <small id="lastNameHelp" className="form-text text-muted">This field cannot be empty</small>
                        </div>
                        <div className="form-group">
                            <label for="dobTextBox" className="form-label mt-4">Date of Birth</label>
                            <input type="text" className="form-control" id="dobTextBox" onChange={handleDobChange} aria-describedby="dobHelp" placeholder="yyyy-mm-dd" defaultValue={agent.dob}/>
                            <small id="dobHelp" className="form-text text-muted">This field cannot be empty</small>
                        </div>
                        <div className="form-group">
                            <label for="heightInInchesTextBox" className="form-label mt-4">Height in Inches</label>
                            <input type="text" className="form-control" id="heightInInchesTextBox" onChange={handleHeightInInchesChange} aria-describedby="heightInInchesHelp" placeholder="Enter your height in inches" defaultValue={agent.heightInInches}/>
                            <small id="heightInInchesHelp" className="form-text text-muted">This field cannot be empty</small>
                        </div>

                        <button type="submit" className="btn btn-outline-warning">Submit</button>
                    </fieldset>
                </form>
       
    );
}

export default UpdateAgent;
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function RemoveAgent({removeAgent}) {
    const [agentId, setAgentId] = useState(0);
    const history = useHistory();
    
    const init = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    };

    const handleRemoveAgent = async (event) => {
        const response = await fetch(`http://localhost:8080/api/agent/${agentId}`, init)
            if(response.status === 204 || response.status === 404){
                removeAgent(agentId);
            } else{
                return Promise.reject(`delete found with status  ${response.status}`);
            }
            const json = await response.json();
    }

    const handleAgentIdChange = (event) => {
        setAgentId(event.target.value);
    }


    return(
        <div className="card text-white border-primary mb-3">
            <div className="card-header"><p className="text-warning">FIELD AGENT FORM </p></div>
            <div className="card-body">
                <form onSubmit={handleRemoveAgent}>
                    <fieldset>
                        <legend><p className="text-primary"> REMOVE AGENT </p></legend>
                        <div className="form-group">
                            <label for="agentIdTextBox" className="form-label mt-4">Agent ID</label>
                            <input type="text" className="form-control" id="agentIdTextBox" onChange={handleAgentIdChange} aria-describedby="agentIdHelp" placeholder="Enter the agent's Id" />
                            <small id="agentIdHelp" className="form-text text-muted">This field cannot be empty</small>
                        </div>
                        
                        <button type="submit" className="btn btn-outline-warning">Submit</button>
                    </fieldset>
                </form>
            </div>
        </div>

    );
}
export default RemoveAgent;
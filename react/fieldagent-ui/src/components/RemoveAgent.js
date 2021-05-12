import {useState} from 'react';

function RemoveAgent({removeAgent}) {
    const [agentId, setAgentId] = useState(0);
    
    const handleRemoveAgent = (event) => {
        event.preventDefault();
        removeAgent(agentId);
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
import Agent from './Agent';
import UpdateAgent from './UpdateAgent';
import { useState } from 'react';

function AgentList({ agents = [], removeAgent, updateAgents }) {
    let newAgent = {
        agentId: 0,
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        heightInInches: 0
    };

    const [agent, setAgent] = useState(newAgent);

    const update = (newId, newFirstName, newMiddleName, newLastName, newDob, newHeighInInches) => {
        newAgent.agentId = newId;
        newAgent.firstName = newFirstName;
        newAgent.middleName = newMiddleName;
        newAgent.lastName = newLastName; 
        newAgent.dob = newDob;
        newAgent.heightInInches = newHeighInInches;

        setAgent(newAgent);
    }

    return (
        <div className="card text-white border-primary mb-3" >
            <div className="card-header">TABLE</div>
            <div className="card-body">
                <h4 className="card-title">List of Active Agents</h4>
                <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center text-warning">
                    
                    {
                        agents.map(a => <Agent
                            key={a.agentNum}
                            agentId={a.agentId}
                            firstName={a.firstName}
                            middleName={a.middleName}
                            lastName={a.lastName}
                            dob={a.dob}
                            heightInInches={a.heightInInches}
                            agencies={a.agencies}
                            removeAgent={removeAgent}
                            updateAgent={update} />)}
                    
                    </li>   
                    <br></br>
                    <br></br>
                    <UpdateAgent agent={agent} updateView={updateAgents}/>     
                </ul>
            </div>
        </div>
    )
}

export default AgentList;
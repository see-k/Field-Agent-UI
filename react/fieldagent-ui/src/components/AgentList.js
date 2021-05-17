import Agent from './Agent';
import { useState } from 'react';

function AgentList({ agents = [], removeAgent }) {
    const forceUpdate = () => {
        window.location.reload();
    }

    return (
        <div className="card text-white border-primary mb-3" >
            <div className="card-header">TABLE</div>
            <div className="card-body">
                <h4 className="card-title">List of Active Agents</h4>
                <p className="text-danger">Important!</p>
                <p className="text-warning">click the button below to display recent updates</p>
                <button type="submit" onClick={forceUpdate} className="btn btn-outline-success">Display Updates</button>
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
                            removeAgent={removeAgent} />)}
                    
                    </li>      
                </ul>
            </div>
        </div>
    )
}

export default AgentList;
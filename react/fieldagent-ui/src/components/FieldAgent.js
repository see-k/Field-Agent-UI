import { useEffect, useState } from 'react';
import AgentList from './AgentList';
import ControlPanel from './ControlPanel';
import Messages from './Messages';

function FieldAgent() {
    const [fieldAgents, setFieldAgents] = useState([]);
    const [message, setMessages] = useState("Active");

    useEffect(() => {
        fetch("http://localhost:8080/api/agent")
            .then(response => {
                if (response.status !== 200) {
                    return Promise.reject("get didn't work ...");
                }
                return response.json();
            })
            .then(json => setFieldAgents(json))
            .catch(console.log("oops..."));
    }, []);

//const addFetch = (agent) => {
async function addFetch(agent) {
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(agent)
    };

    await fetch("http://localhost:8080/api/agent", init)
    .then(response => {
        if(response.status !== 201){
            return Promise.reject("Error")
        }
        return response.json();
    })
    .then(json => {
        setFieldAgents([...fieldAgents, json]);
        setMessages("");
    })
    .catch(console.log);

}

const addAgent = (agent) => {
    let canSet = true;

    for(let i = 0; i < fieldAgents.length; i++){
        if(agent.firstName === fieldAgents[i].firstName &&
            agent.lastName === fieldAgents[i].lastName){
            canSet = false;
        }
    }

    if(canSet){
        addFetch(agent);
    }else{
        setMessages("Agent with this ID is already active");
    }
}

const updateAgents = (agent) => {
    let newAgents = [...fieldAgents];
    for(let i = 0; i < newAgents.length; i++){
        if(agent.agentId === newAgents[i].agentId){
            newAgents[i] = agent;
        }
    }

    setFieldAgents(newAgents);
}

const removeAgent = (agentId) => {
    let newAgents = [];

    for(let i = 0; i < fieldAgents.length; i++){
        if(fieldAgents[i].agentId !== agentId){
            newAgents.push(fieldAgents[i]);
        }
    }

    if(newAgents.length !== fieldAgents.length){
        setFieldAgents(newAgents);
        setMessages("");
    }else{
        setMessages("Could not find agent to deactivate");
    }

}

    return (
        <div className="card bg-light mb-3">
        <div className="card-header">
            <h2 className="text-primary">M08: Field Agent Terminal</h2>
            </div>
            <div className="card-body">
                <h4 className="card-title">Home</h4>
                <div className="row">
                    <div className="col">
                        <div className="list-group">
                            <AgentList agents={fieldAgents} removeAgent={removeAgent} updateAgents={updateAgents} />
                        </div>
                    </div>
                    <div className="col">
                        <ControlPanel parentAddAgent={addAgent} />
                    </div>
                </div>
            </div>
        </div>


    );
}
export default FieldAgent;
function Agent({
    agentId,
    firstName,
    middleName,
    lastName,
    dob,
    heightInInches,
    agencies,
    removeAgent,
    updateAgent }) {
        const init = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };

        
        async function deleteById(){

            const response = await fetch(`http://localhost:8080/api/agent/${agentId}`, init)
            if(response.status === 204 || response.status === 404){
                removeAgent(agentId);
            } else{
                return Promise.reject(`delete found with status  ${response.status}`);
            }
            const json = await response.json();
        }

        const update = () => {
            updateAgent(agentId, firstName, middleName, lastName, dob, heightInInches);
        }

        return(
             <div key={agentId} className="list-group">
                 NAME
                 <br></br>
                 {lastName}, {firstName} {middleName} 
                 <br></br>
                 <br></br> 
                ID
                <br></br>
                {agentId} 
                <br></br> 
                <br></br>
                BORN
                <br></br>
                {dob}
                <br></br> 
                <br></br> 
                Height 
                <br></br>
                {heightInInches} 
                <br></br>
                <br></br> 
                Agencies 
                <br></br>
                {agencies}
                <br></br>
                <br></br>
                <button onClick={update} className="btn btn-outline-primary">Update</button>
                <br></br>
                <button onClick={deleteById} className="btn btn-outline-danger">Delete</button>

            </div> 
        );
    }
    
    export default Agent;
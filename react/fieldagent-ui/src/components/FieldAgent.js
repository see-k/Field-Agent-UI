import { useContext, useEffect, useState } from 'react';
import AgentList from './AgentList';
import ControlPanel from './ControlPanel';
import Messages from './Messages';
import AuthContext from "./AuthContext";


function FieldAgent() {
    const auth = useContext(AuthContext);
    
    return (
        <div className="card bg-light mb-3">
        <div className="card-header">
            <h4 className="text-primary">Welcome Agent {auth.user.username}</h4>
            </div>
            <div className="card-body">
                <h4 className="card-title">Home</h4>
                <div className="row">
                    <div className="col">
                        <div className="list-group">
                        <figure>
                                <blockquote class="blockquote">
                                    <p class="mb-0">"Of all those in the army close to the commander none is more intimate than the secret agent; of all rewards none more liberal than those given to secret agents; of all matters none is more confidential than those relating to secret operations."</p>

                                </blockquote>
                                <figcaption class="blockquote-footer">
                                    Sun Tzu <cite title="Source Title">"The Art of War" by Sun Tzu, translated by Chow-Hou Wee, (Chapter XIII), 2003.</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default FieldAgent;
import AddAgent from './AddAgent';
import RemoveAgent from './RemoveAgent';

function ControlPanel({parentAddAgent}){
    return(
        <> 
            <AddAgent addAgent={parentAddAgent}/>
        </>
    );
}

export default ControlPanel;
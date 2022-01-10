import { useState } from "react";
import Card from "../ui/Card";
import SkillLevels from "./SkillLevels";

function SkillItem(props) {
    const [ showStates, setShowStates ] = useState(false);

    function handleToggleStats() {
        console.log("clicked")
        setShowStates(!showStates)
    }
    return (
        <li key={props.key}> 
            <Card>
                <h2 onClick={handleToggleStats}>{props.name}</h2>
                {showStates && <hr/>}
                {showStates && <p><b>{props.description}</b></p>}
                {showStates && <SkillLevels levels={props.skillLevels} />}
            </Card>
        </li>
    );
}

export default SkillItem;
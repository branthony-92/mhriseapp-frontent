import { useState } from "react";
import Card from "react-bootstrap/Card"
import SkillLevels from "./SkillLevels";

function SkillItem(props) {
    const [ showStates, setShowStates ] = useState(false);

    function handleToggleStats() {
        console.log("clicked")
        setShowStates(!showStates)
    }
    return (
            <Card onClick={handleToggleStats}>
                <Card.Title>{props.name}</Card.Title >
                <Card.Body>
                    {showStates && <hr/>}
                    {showStates && <p><b>{props.description}</b></p>}
                    {showStates && <SkillLevels levels={props.skillLevels} />}
                </Card.Body>
            </Card>
    );
}

export default SkillItem;
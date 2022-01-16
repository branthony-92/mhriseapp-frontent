import { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArmourPiece from "./ArmourPiece";
import ArmourSetSummary from "./ArmourSetSummary";
import ArmourStats from "./ArmourStats";

import helmImgURL from "./icons/icon_helm.png";
import mailImgURL from "./icons/icon_mail.png";
import vambracesImgURL from "./icons/icon_arms.png";
import coilImgURL from "./icons/icon_coil.png";
import gravesImgURL from "./icons/icon_legs.png";

function ArmourSet(props) {
    const [ showStates, setShowStates ] = useState(false);
    const [ pieceData, setPieceData ] = useState(props.helm)

    function handleToggleStats() {
        console.log("clicked")
        setShowStates(!showStates)
    }

    function handleSelect(data) {
        setPieceData(data)
    }

    function generateStateSummary(set) {
        let stats = {
            defence: 0,              
            fire_res: 0,             
            water_res: 0,           
            thunder_res: 0,           
            ice_res: 0,    
            dragon_res: 0 
        };

        if (set.helm) {
            stats.defence += set.helm.defence;              
            stats.fire_res += set.helm.fire_res;  
            stats.water_res += set.helm.water_res;  
            stats.thunder_res += set.helm.thunder_res;  
            stats.ice_res += set.helm.ice_res;  
            stats.dragon_res += set.helm.dragon_res;  
        }
        if (set.mail) {
            stats.defence += set.mail.defence;              
            stats.fire_res += set.mail.fire_res;  
            stats.water_res += set.mail.water_res;  
            stats.thunder_res += set.mail.thunder_res;  
            stats.ice_res += set.mail.ice_res;  
            stats.dragon_res += set.mail.dragon_res;  
        }
        if (set.coil) {
            stats.defence += set.coil.defence;              
            stats.fire_res += set.coil.fire_res;  
            stats.water_res += set.coil.water_res;  
            stats.thunder_res += set.coil.thunder_res;  
            stats.ice_res += set.coil.ice_res;  
            stats.dragon_res += set.coil.dragon_res;  
        }
        if (set.vambraces) {
            stats.defence += set.vambraces.defence;              
            stats.fire_res += set.vambraces.fire_res;  
            stats.water_res += set.vambraces.water_res;  
            stats.thunder_res += set.vambraces.thunder_res;  
            stats.ice_res += set.vambraces.ice_res;  
            stats.dragon_res += set.vambraces.dragon_res;  
        }
        if (set.greaves) {
            stats.defence += set.greaves.defence;              
            stats.fire_res += set.greaves.fire_res;  
            stats.water_res += set.greaves.water_res;  
            stats.thunder_res += set.greaves.thunder_res;  
            stats.ice_res += set.greaves.ice_res;  
            stats.dragon_res += set.greaves.dragon_res;  
        }
        return stats;
    }

   
    return (

        <li key={props.key}> 
            <Card>
                <Card.Title onClick={handleToggleStats}>{props.setName}</Card.Title> 
                <Card.Body>

                    {showStates && <ArmourSetSummary key={props.key} info={generateStateSummary(props)} />}
                    <Row>
                        <Col>
                            {showStates && <ArmourPiece onSelect={handleSelect} key={props.key} img={helmImgURL} info={props.helm}/>}
                        </Col>
                        
                        <Col>
                            {showStates && <ArmourPiece onSelect={handleSelect} key={props.key} img={mailImgURL} info={props.mail}/>}
                        </Col>
                        
                        <Col>
                            {showStates && <ArmourPiece onSelect={handleSelect} key={props.key} img={vambracesImgURL} info={props.vambraces} />}
                        </Col>
                        
                        <Col>
                            {showStates && <ArmourPiece onSelect={handleSelect} key={props.key} img={coilImgURL} info={props.coil} /> }
                        </Col>
                        
                        <Col>
                            {showStates && <ArmourPiece onSelect={handleSelect} key={props.key} img={gravesImgURL} info={props.greaves} />}
                        </Col>
                    </Row>
                    {showStates && <ArmourStats info={pieceData}/>}
                </Card.Body>
            </Card>
        </li>
    );
}

export default ArmourSet;
import ListGroup from "react-bootstrap/ListGroup";

export default function ArmourStats(props) {
    return (      
        <>    
            <h4>{props.info.piece_name}</h4>   
            <p>Rarity: <b>{props.info.rarity}</b></p>                
            <p>Defense: <b>{props.info.defence}</b></p>               
            <p>Fire Res: <b>{props.info.fire_res}</b></p>               
            <p>Water Res: <b>{props.info.water_res}</b></p>            
            <p>Thunder Res: <b>{props.info.thunder_res}</b></p>            
            <p>Ice Res: <b>{props.info.ice_res}</b></p>             
            <p>Dragon Res: <b>{props.info.dragon_res}</b></p> 
            <h4>Skills</h4>
            <hr/>
            <ListGroup>
                {props.info.skills.map((skill =>
                    <ListGroup.Item>
                        <b>{skill.name}:</b> Level {skill.level}
                    </ListGroup.Item>
                ))}
            </ListGroup>      
        </>
    )
}
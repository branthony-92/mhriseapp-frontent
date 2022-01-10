function ArmourStats(props) {
    return (
        <div className='modal'>
              <section>       
                <p>Type: <b>{props.info.piece_type}</b></p>   
                <p>Rarity: <b>{props.info.rarity}</b></p>                
                <p>Defense: <b>{props.info.defence}</b></p>               
                <p>Fire Res: <b>{props.info.fire_res}</b></p>               
                <p>Water Res: <b>{props.info.water_res}</b></p>            
                <p>Thunder Res: <b>{props.info.thunder_res}</b></p>            
                <p>Ice Res: <b>{props.info.ice_res}</b></p>             
                <p>Dragon Res: <b>{props.info.dragon_res}</b></p> 
                <h4>Skills</h4>
                <hr/>
                <ul>
                    {props.info.skills.map((skill =>
                        <li>
                            <b>{skill.name}:</b> Level {skill.level}
                        </li>
                    ))}
                </ul>      
            </section>
        </div>
    )
}

export default ArmourStats
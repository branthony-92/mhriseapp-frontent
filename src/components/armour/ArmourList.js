import ArmourSet from "./ArmourSet";

function ArmourList(props) {
    return (
        <div className="flex-grow-1 overdflow-auto">
            <ul>
                {props.armourSets.map((set =>
                    <ArmourSet  
                    key={set.key}    
                    setName={set.set_name}       
                    helm={set.helm}
                    mail={set.mail}
                    vambraces={set.vambraces}
                    coil={set.coil}
                    greaves={set.greaves}
                    /> 
                ))}
            </ul>
        </div>
    );
}

export default ArmourList;
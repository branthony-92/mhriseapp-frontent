import ArmourSet from "./ArmourSet";

function ArmourList(props) {
    return (
        <div className="flex-grow-1 overdflow-auto">
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
        </div>
    );
}

export default ArmourList;
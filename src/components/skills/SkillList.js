import SkillItem from "./SkillItem";

function SkillList(props) {
    return (
        <ul>
           {props.skills.map((skill =>
                <SkillItem  
                    key={skill.key}    
                    name={skill.skill_name}       
                    maxLevel={skill.skill_level_max}
                    description={skill.skill_desc}
                    skillLevels={skill.skill_levels}
                /> 
            ))} 
        </ul>
    );
}

export default SkillList;
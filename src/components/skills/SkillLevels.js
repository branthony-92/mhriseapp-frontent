function SkillLevels(props) {
    return (
        <ul>
            {props.levels.map((level =>
                <li>{level}</li>
                ))}
        </ul>
    );
}

export default SkillLevels;
import { useState, useEffect } from "react";
import SkillList from "../components/skills/SkillList";

function SkillsPage(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedSkills, setLoadedSkills] = useState([]);

    // load the armour for the page
    useEffect(() => {
        setIsLoading(true);
        console.log("fetching");
        fetch(
            'https://mhrise-app-backend.herokuapp.com/api/v1/skills'
        ).then(response => {
            console.log("waiting for response")
            console.log(response)
            return response.json();
        }).then(data => {
            console.log("reading data")
            setIsLoading(false)
            console.log(data.message_body)
            setLoadedSkills(data.message_body)
        });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <SkillList skills={loadedSkills}/>
    );

}

export default SkillsPage;
function ListItem(props) {
    return (
        <div className="work-experience-item">
            <li>{props.exp.job}</li>
            <li>{props.exp.workPlace}</li>
            <li>{props.exp.roles}</li><br />
        </div>
    )
}

export default function WorkInfo(props) {
    const forDisplay = props.workExperience.slice(1);
    return (
        <div className="work-panel">
            <h2>Work Experience</h2>
            <ul>
                {forDisplay.map((exp) => {
                    return <ListItem key={exp} exp={exp} />
                })}
            </ul>
        </div>
    )
}
import { useState } from "react";
import '../styles/MainPanel.css'

export default function WorkInfoForm({ setWorkExperience, workExperience, job, workPlace, roles }) {
    const [thisJob, setJob] = useState(job);
    const [thisWorkPlace, setWorkPlace] = useState(workPlace);
    const [thisRoles, setRoles ] = useState(roles);

    const handleSubmit = (e) => {
        const thisWorkExperience = workExperience;
        console.log(thisWorkExperience);
        thisWorkExperience.push({
            job: thisJob,
            workPlace: thisWorkPlace,
            roles: thisRoles
        });
        console.log(thisWorkExperience);
        setWorkExperience(thisWorkExperience);
        e.preventDefault();
    }

    return (
        <div className="work-info-form">
            <div className="form-wrapper">
                <label>
                    Job
                    <input
                        type="text"
                        value={thisJob}
                        onChange={(e) => setJob(e.target.value)}
                    />
                </label><br />
                <label>
                    Work Place
                    <input
                        type="text"
                        value={thisWorkPlace}
                        onChange={(e) => setWorkPlace(e.target.value)}
                    />
                </label><br />
                <label>
                    Roles
                    <input
                        type="text"
                        value={thisRoles}
                        onChange={(e) => setRoles(e.target.value)}
                    />
                </label><br />
            </div>
            <button className="button" id="add" onClick={handleSubmit}>Add</button>
        </div>
    )
}
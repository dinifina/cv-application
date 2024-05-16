import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import WorkInfo from "./WorkInfo";

export default function PreviewPanel({ name, email, phoneNumber, address, education, workExperience}) {
    return (
        <div className="preview-panel">
            <div className="personal-info">
                <PersonalInfo 
                    name={name}
                    email={email}
                    phoneNumber={phoneNumber}
                    address={address}
                />                
            </div>
            <div className="education-info">
                <Education 
                    education={education}
                />
            </div>
            <div className="work-info">
                <WorkInfo
                   workExperience={workExperience} 
                />
            </div>
        </div> 
    ) 
}
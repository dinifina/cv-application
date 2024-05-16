import { useState } from 'react';
import '../styles/MainPanel.css';
import PreviewPanel from './PreviewPanel';
import WorkInfoForm from './WorkInfoForm';

export default function MainPanel() {
    const personObj = {
        name: "John Doe",
        email: "abcd@gmail.com",
        phoneNumber: "12345678",
        address: "123 High St",
        education: "Bachelor of Science",
        workExperience: [
            {
                job: "Software Engineer",
                workPlace: "Google",
                roles: "Made Software, Ate the software"
            }
       ]
    }

    const [isEditing, setIsEditing] = useState(true);
    const [name, setName] = useState(personObj.name);
    const [email, setEmail] = useState(personObj.email);
    const [phoneNumber, setPhoneNumber] = useState(personObj.phoneNumber);
    const [address, setAddress] = useState(personObj.address);
    const [education, setEducation] = useState(personObj.education);
    const [workExperience, setWorkExperience] = useState(personObj.workExperience);

    const toggleEdit = () => {
        console.log("Form submitted!");
        if (isEditing === false) {
            setIsEditing(true);
        } else {
            setIsEditing(false)
        }
    }

    return (
        <div className='main-panel'>
        {isEditing ? (
            <div className='form-sub-box'>
                    <div className='personal-info'>
                        <h2>Personal Info</h2>
                        <label>
                            Name
                            <input 
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label><br />
                        <label>
                            Email
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label><br />
                        <label>
                            Phone Number
                            <input 
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </label><br />
                        <label>
                        Address
                        <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                        /> 
                        </label><br />
                    </div>
                    <div className='education'>
                        <h2>Education</h2>
                        <label>
                            Education
                            <input
                                type="text" 
                                value={education}
                                onChange={(e) => setEducation(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className='work'>
                        <h2>Work Experience</h2>
                        <WorkInfoForm
                            setWorkExperience={setWorkExperience}
                            workExperience={workExperience}
                            job={workExperience.slice(-1)[0].job}
                            workPlace={workExperience.slice(-1)[0].workPlace}
                            roles={workExperience.slice(-1)[0].roles}
                        />
                    </div>
                    <button className='button' onClick={toggleEdit}>Submit</button>
                </div>
        ) : (
            <div>
                <PreviewPanel 
                    name={name}
                    email={email}
                    phoneNumber={phoneNumber}
                    address={address}
                    education={education}
                    workExperience={workExperience}
                />
                <button className='button' onClick={toggleEdit}>Edit</button>
            </div> 
            ) 
        }
        </div>
    )    
}
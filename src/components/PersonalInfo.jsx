// import emailLogo from '../assets';
// import phoneLogo from '../assets';
// import addressLogo from '../assets';

export default function PersonalInfo({ name, email, phoneNumber, address }) {
    return (
        <div className='personal-info'>
            <h1 className='name'>{name}</h1>
            <div className='socials'>
                <div className='email'>
                    {/* <img src={emailLogo}/> */}
                    <p>{email}</p>
                </div>
                <div className='phoneNumber'>
                    {/* <img src={phoneLogo}/> */}
                    <p>{phoneNumber}</p>
                </div>
                <div className='address'>
                    {/* <iimg src={addressLogo}/> */}
                    <p>{address}</p>
                </div>
            </div>
        </div>
    )
}
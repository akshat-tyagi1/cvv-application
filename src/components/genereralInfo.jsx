import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function GeneralInfo({ generalInfo }) {
    const {
        name,
        email,
        contactNumber,
        city,
        state,
        linkdin,
        github,
        summary
    } = generalInfo;

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <div>
            <FaEnvelope size={16}/>
            <span>[{email}]</span>
        </div>
        <div>
            <FaPhone size={16}/>
            <span>[{contactNumber}]</span>
        </div>
        <div>
            <FaMapMarkerAlt size={16}/>
            <span>[{city}, {state}]</span>
        </div>
        <div>
            <FaLinkedin size={16}/>
            <span>[{linkdin}]</span>
        </div>
        <div>
            <FaGithub size={16}/>
            <span>[{github}]</span>
        </div>
      </div>
      <div>
        <h2>SUMMARY</h2>
        <p>[{summary}]</p>
      </div>
    </div>
  );
}

export default GeneralInfo;

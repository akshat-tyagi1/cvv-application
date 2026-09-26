import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function GeneralInfo({ generalInfo }) {
  const { name, email, contactNumber, location, linkdin, github, summary } =
    generalInfo;

  return (
    <header className="resume-header">
      <h1>{name}</h1>
      <div className="contact-info">
        <div>
          <FaEnvelope size={16} />
          <span>[{email}]</span>
        </div>
        <div>
          <FaPhone size={16} />
          <span>[{contactNumber}]</span>
        </div>
        <div>
          <FaMapMarkerAlt size={16} />
          <span>
            [{location}]
          </span>
        </div>
        <div>
          <FaLinkedin size={16} />
          <span>[{linkdin}]</span>
        </div>
        <div>
          <FaGithub size={16} />
          <span>[{github}]</span>
        </div>
      </div>
      <section className="resume-section">
        <h2>SUMMARY</h2>
        <p>[{summary}]</p>
      </section>
    </header>
  );
}

export default GeneralInfo;

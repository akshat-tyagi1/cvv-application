import { useState } from "react";
import GeneralInfo from "./components/genereralInfo";
import Education from "./components/education";
import { Languages } from "lucide-react";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "Your Name",
    email: "your.email@example.com",
    contactNumber: "+XX XXXXX XXXXX",
    city: "Your City",
    state: "State",
    linkdin: "linkdin.com/in/yourusername",
    github: "github.com/yourusername",
    summary:
      "Write a short 1-2 line summary about yourself, your interests, and what you're looking for.",
  });

  const [education, setEducation] = useState({
    name: "University Name",
    city: "City",
    state: "State",
    county: "Country",
    degree: "Degree, e.g. B.Tech in Computer Scinece and Engineering",
    startYear: "Start Year",
    endYear: "End Year"
  })

  const [skills, setSkills] = useState({
    langueges: "e.g. JavaScript, Python, C, C++",
    frontend: ""
  })

  return (
    <div>
      <GeneralInfo generalInfo={generalInfo} />
      <Education education={education} />
    </div>
  );
}

export default App;

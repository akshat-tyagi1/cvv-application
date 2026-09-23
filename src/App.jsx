import { useState } from "react";
import GeneralInfo from "./components/genereralInfo";
import Education from "./components/education";
import Skills from "./components/skills";
import Expereince from "./components/expereince";

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

  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      name: "University Name",
      city: "City",
      state: "State",
      county: "Country",
      degree: "Degree, e.g. B.Tech in Computer Scinece and Engineering",
      startYear: "Start Year",
      endYear: "End Year",
    },
  ]);

  const [skills, setSkills] = useState([
    {
      id: crypto.randomUUID(),
      category: "Languages",
      technologies: "e.g. JavaScript, Python, C, C++",
    },
    {
      id: crypto.randomUUID(),
      category: "Frontend",
      technologies: "e.g. React, HTML, CSS, Tailwind CSS, Next.js",
    },
    {
      id: crypto.randomUUID(),
      category: "Backend",
      technologies: "e.g. Node.js, Express, REST APIs",
    },
    {
      id: crypto.randomUUID(),
      category: "Databases",
      technologies: "e.g. PostgreSQL, MongoDB, Prisma",
    },
    {
      id: crypto.randomUUID(),
      category: "Tools",
      technologies: "e.g. Git, Github, VS Code, Figma, Docker",
    },
    {
      id: crypto.randomUUID(),
      category: "Other",
      technologies: "e.g. Data Structures & Algorithms, Problem Solving, Linux",
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      id: crypto.randomUUID(),
      title: "Job Title",
      startMonthYear: "Start Month Year",
      endMonthYear: "End Month Year",
      companyName: "Company Name",
      city: "City",
      country: "Country",
      pointers: [
        "Achievement or responsibility 1",
        "Achievement or responsibility 2",
        "Achievement or responsibility 3",
        "Achievement or responsibility 4",
      ],
    },
  ]);

  const [projects, setProjects] = useState([
    {
      id: crypto.randomUUID(),
      title: "Project Title",
      technologies: "Technologies used e.g. JavaScript, HTML, CSS",
      pointers: ["Short description or acheivement 1", "Short description or acheivement 2", "Short description or acheivement 3"]
    },
    {
      id: crypto.randomUUID(),
      title: "Project Title",
      technologies: "Technologies used e.g. JavaScript, HTML, CSS",
      pointers: ["Short description or acheivement 1", "Short description or acheivement 2", "Short description or acheivement 3"]
    },
    {
      id: crypto.randomUUID(),
      title: "Project Title",
      technologies: "Technologies used e.g. JavaScript, HTML, CSS",
      pointers: ["Short description or acheivement 1", "Short description or acheivement 2", "Short description or acheivement 3"]
    },
  ]);

  return (
    <div>
      <GeneralInfo generalInfo={generalInfo} />
      <Education education={education} />
      <Skills skills={skills} />
      <Expereince expereinces={experiences} />
    </div>
  );
}

export default App;

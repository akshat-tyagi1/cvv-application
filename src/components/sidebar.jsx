import GeneralInfoForm from "./generalInfoForm";
import SummaryForm from "./summaryForm";
import EducationForm from "./educationForm";
import SkillsForm from "./skillsForm";
import ExperienceForm from "./experienceForm";

function Sidebar({
  generalInfo,
  setGeneralInfo,
  summary,
  setSummary,
  education,
  setEducation,
  skills,
  setSkills,
  experiences,
  setExperiences
}) {
    console.log(experiences);
  return (
    <div>
      <h2>Edit Your Resume</h2>

      <form action="">
        <h2>General Info</h2>
        <GeneralInfoForm
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />

        <h2>Summary</h2>
        <SummaryForm summary={summary} setSummary={setSummary} />

        <h2>Education</h2>
        <EducationForm education={education} setEducation={setEducation} />

        <h2>Skills</h2>
        <SkillsForm skills={skills} setSkills={setSkills} />

        <h2>Experiences</h2>
        <ExperienceForm experiences={experiences} setExperiences={setExperiences} />
      </form>
    </div>
  );
}

export default Sidebar;

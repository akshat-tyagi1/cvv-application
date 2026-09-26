import GeneralInfoForm from "./generalInfoForm";
import SummaryForm from "./summaryForm";
import EducationForm from "./educationForm";

function Sidebar({
  generalInfo,
  setGeneralInfo,
  summary,
  setSummary,
  education,
  setEducation,
}) {
  return (
    <div>
      <h2>Edit Your Resume</h2>

      <form action="">
        <GeneralInfoForm
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />

        <SummaryForm summary={summary} setSummary={setSummary} />

        <EducationForm education={education} setEducation={setEducation} />
      </form>
    </div>
  );
}

export default Sidebar;

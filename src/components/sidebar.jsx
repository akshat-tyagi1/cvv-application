import GeneralInfoForm from "./generalInfoForm";
import SummaryForm from "./summaryForm";

function Sidebar({ generalInfo , setGeneralInfo, summary, setSummary}) {
  return (
    <div>
      <h2>Edit Your Resume</h2>

      <form action="">
        <GeneralInfoForm
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />

        <SummaryForm summary={summary} setSummary={setSummary} />
      </form>
    </div>
  );
}

export default Sidebar;

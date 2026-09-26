import GeneralInfoForm from "./generalInfoForm";

function Sidebar({ generalInfo , setGeneralInfo}) {
  return (
    <div>
      <h2>Edit Your Resume</h2>

      <form action="">
        <GeneralInfoForm
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
      </form>
    </div>
  );
}

export default Sidebar;

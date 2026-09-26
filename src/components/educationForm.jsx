function EducationForm({ education, setEducation }) {
  return (
    <div>
      {education.map(({ id, name, location, degree, years }) => (
        <div key={id} className="form-entry">
          <div className="form-field">
            <label htmlFor="">Institute Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) =>
                setEducation(
                  education.map((entry) =>
                    entry.id === id
                      ? { ...entry, name: e.target.value }
                      : entry,
                  ),
                )
              }
            />
          </div>

          <div className="form-field">
            <label htmlFor="">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) =>
                setEducation(
                  education.map((entry) =>
                    entry.id === id
                      ? { ...entry, location: e.target.value }
                      : entry,
                  ),
                )
              }
            />
          </div>

          <div className="form-field">
            <label htmlFor="">degree</label>
            <input
              type="text"
              value={degree}
              onChange={(e) =>
                setEducation(
                  education.map((entry) =>
                    entry.id === id
                      ? { ...entry, degree: e.target.value }
                      : entry,
                  ),
                )
              }
            />
          </div>

          <div className="form-field">
            <label htmlFor="">Years</label>
            <input
              type="text"
              value={years}
              onChange={(e) =>
                setEducation(
                  education.map((entry) =>
                    entry.id === id
                      ? { ...entry, years: e.target.value }
                      : entry,
                  ),
                )
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationForm;

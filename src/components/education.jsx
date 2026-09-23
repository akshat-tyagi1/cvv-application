function Education({ education }) {
  return (
    <div className="education-container">
      <h2>EDUCATION</h2>

      <div>
        {education.map(
          ({ id, name, city, state, country, degree, startYear, endYear }) => (
            <div className="education-container" key={id}>
              <div className="education-header">
                <h3>[{name}]</h3>
                <span>
                  [{city}, {state}, {country}]
                </span>
              </div>

              <div className="education-details">
                <p>[{degree}]</p>
                <span>
                  [{startYear}] - [{endYear}]
                </span>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default Education;

function Education({ education }) {
  const { name, city, state, country, degree, startYear, endYear } = education;

  return (
    <div className="education-container">

      <h2>EDUCATION</h2>

      <div className="education-header">
        <h3>[{name}]</h3>
        <span>
          [{city}, {state}, {country}]
        </span>
      </div>

      <div className="education-details">
        <p>[{degree}]</p>
        <span>[{startYear}] - [{endYear}]</span>
      </div>
    </div>
  );
}

export default Education;

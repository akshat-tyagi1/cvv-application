function Education({ education }) {
  return (
    <section className="resume-section">
      <h2>EDUCATION</h2>

      <div>
        {education.map(
          ({ id, name, city, state, country, degree, startYear, endYear }) => (
            <article className="entry" key={id}>
              <div className="entry-header">
                <h3>[{name}]</h3>
                <span>
                  [{city}, {state}, {country}]
                </span>
              </div>

              <div className="entry-details">
                <p>[{degree}]</p>
                <span>
                  [{startYear}] - [{endYear}]
                </span>
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
}

export default Education;

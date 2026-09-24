function Experience({ expereinces }) {
  return (
    <section className="resume-section">
      <h2>Experience</h2>

      {expereinces.map(
        ({
          id,
          title,
          startMonthYear,
          endMonthYear,
          companyName,
          city,
          country,
          pointers,
        }) => (
          <article key={id} className="entry">
            <div className="experience-header">
              <h3>[{title}]</h3>
              <span>
                [{startMonthYear} – {endMonthYear}]
              </span>
            </div>

            <div className="experience-details">
              <p>[{companyName}]</p>
              <span>
                [{city}, {country}]
              </span>
            </div>

            <ul className="entry-points">
              {pointers.map(({id, text}) => (
                <li key={id}>[{text}]</li>
              ))}
            </ul>
          </article>
        ),
      )}
    </section>
  );
}

export default Experience;

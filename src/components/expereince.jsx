function Expereince({ expereinces }) {
  return (
    <section>
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
          <article key={id}>
            <div className="experience-top">
              <h3>[{title}]</h3>
              <span>
                [{startMonthYear} – {endMonthYear}]
              </span>
            </div>

            <div className="experience-bottom">
              <p>[{companyName}]</p>
              <span>
                [{city}, {country}]
              </span>
            </div>

            <ul>
              {pointers.map((pointer, index) => (
                <li key={index}>[{pointer}]</li>
              ))}
            </ul>
          </article>
        ),
      )}
    </section>
  );
}

export default Expereince;

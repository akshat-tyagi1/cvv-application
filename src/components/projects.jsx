function Projects({ projects }) {
  return (
    <section className="resume-section">
      <h3>PROJECTS</h3>
      {projects.map(({ id, title, monthYear, technologies, pointers }) => (
        <article key={id} className="entry">
          <div className="entry-header">
            <h3>[{title}]</h3>
            <span>[{monthYear}]</span>
          </div>

          <p>[{technologies}]</p>
          <ul className="entry-points">
            {pointers.map(({id, text}) => (
              <li key={id}>[{text}]</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Projects;

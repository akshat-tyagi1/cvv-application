function Projects({ projects }) {
  return (
    <section>
      <h3>PROJECTS</h3>
      {projects.map(({ id, title, monthYear, technologies, pointers }) => (
        <article>
          <article>
            <h3>[{title}]</h3>
            <span>[{monthYear}]</span>
          </article>

          <p>[{technologies}]</p>
          <ul>
            {pointers.map((pointer, index) => (
              <li key={index}>[{pointer}]</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

function ProjectsForm({ projects, setProjects }) {
  return (
    <div>
      {projects.map(({ id, title, monthYear, technologies, pointers }) => (
        <div key={id}>
          <label htmlFor="">Projact Name</label>
          <input
            type="text"
            value={title}
            onChange={(e) =>
              projects.map((project) =>
                projects.id === id
                  ? { ...project, title: e.target.value }
                  : project,
              )
            }
          />

          <label htmlFor="">Date</label>
          <input
            type="text"
            value={monthYear}
            onChange={(e) =>
              projects.map((project) =>
                projects.id === id
                  ? { ...project, monthYear: e.target.value }
                  : project,
              )
            }
          />

          <label htmlFor="">technologies</label>
          <input
            type="text"
            value={technologies}
            onChange={(e) =>
              projects.map((project) =>
                projects.id === id
                  ? { ...project, technologies: e.target.value }
                  : project,
              )
            }
          />

          {pointers.map(({ id, text }) => (
            <div key={id}>
              <label htmlFor="">Short Description or Achievement</label>
              <input
                type="text"
                value={text}
                onChange={(e) =>
                  setProjects(
                    pointers.map((pointer) =>
                      pointer.id === id
                        ? { ...pointer, text: e.target.value }
                        : pointer,
                    ),
                  )
                }
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProjectsForm;

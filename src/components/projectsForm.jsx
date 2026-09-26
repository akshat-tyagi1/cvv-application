function ProjectsForm({ projects, setProjects }) {
  return (
    <div>
      {projects.map(
        ({ id: projectId, title, monthYear, technologies, pointers }) => (
          <div key={projectId} className="form-entry">
            <div className="form-field">
              <label htmlFor="">Projact Name</label>
              <input
                type="text"
                value={title}
                onChange={(e) =>
                  setProjects(
                    projects.map((project) =>
                      project.id === projectId
                        ? { ...project, title: e.target.value }
                        : project,
                    ),
                  )
                }
              />
            </div>

            <div className="form-field">
              <label htmlFor="">Date</label>
              <input
                type="text"
                value={monthYear}
                onChange={(e) =>
                  setProjects(
                    projects.map((project) =>
                      project.id === projectId
                        ? { ...project, monthYear: e.target.value }
                        : project,
                    ),
                  )
                }
              />
            </div>

            <div className="form-field">
              <label htmlFor="">technologies</label>
              <input
                type="text"
                value={technologies}
                onChange={(e) =>
                  setProjects(
                    projects.map((project) =>
                      project.id === projectId
                        ? { ...project, technologies: e.target.value }
                        : project,
                    ),
                  )
                }
              />
            </div>

            <div>
              {pointers.map(({ id, text }) => (
                <div key={id} className="form-field">
                  <label htmlFor="">Short Description or Achievement</label>
                  <input
                    type="text"
                    value={text}
                    onChange={(e) =>
                      setProjects(
                        projects.map((project) =>
                          project.id === projectId
                            ? {
                                ...project,
                                pointers: project.pointers.map((pointer) =>
                                  pointer.id === id
                                    ? { ...pointer, text: e.target.value }
                                    : pointer,
                                ),
                              }
                            : project,
                        ),
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        ),
      )}
    </div>
  );
}

export default ProjectsForm;

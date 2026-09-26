function ExperienceForm({ experiences, setExperiences }) {
  return (
    <div>
      {experiences.map(
        ({
          id: experienceId,
          title,
          startMonthYear,
          endMonthYear,
          companyName,
          city,
          country,
          pointers,
        }) => (
          <div key={experienceId} className="form-entry">
            <div className="form-field">
              <label htmlFor="">Job Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) =>
                  setExperiences(
                    experiences.map((experience) =>
                      experience.id === experienceId
                        ? { ...experience, title: e.target.value }
                        : experience,
                    ),
                  )
                }
              />
            </div>

            <div className="form-field">
              <label htmlFor="">Starting Month And Year</label>
              <input
                type="text"
                value={startMonthYear}
                onChange={(e) =>
                  setExperiences(
                    experiences.map((experience) =>
                      experience.id === experienceId
                        ? { ...experience, startMonthYear: e.target.value }
                        : experience,
                    ),
                  )
                }
              />
            </div>

            <div className="form-field">
              <label htmlFor="">Ending Month And Year</label>
              <input
                type="text"
                value={endMonthYear}
                onChange={(e) =>
                  setExperiences(
                    experiences.map((experience) =>
                      experience.id === experienceId
                        ? { ...experience, endMonthYear: e.target.value }
                        : experience,
                    ),
                  )
                }
              />
            </div>

            <div className="form-field">
              <label htmlFor="">Company Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) =>
                  setExperiences(
                    experiences.map((experience) =>
                      experience.id === experienceId
                        ? { ...experience, companyName: e.target.value }
                        : experience,
                    ),
                  )
                }
              />
            </div>

            <div className="form-field">
              <label htmlFor="">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) =>
                  setExperiences(
                    experiences.map((experience) =>
                      experience.id === experienceId
                        ? { ...experience, city: e.target.value }
                        : experience,
                    ),
                  )
                }
              />
            </div>

            <div className="form-field">
              <label htmlFor="">Country</label>
              <input
                type="text"
                value={country}
                onChange={(e) =>
                  setExperiences(
                    experiences.map((experience) =>
                      experience.id === experienceId
                        ? { ...experience, country: e.target.value }
                        : experience,
                    ),
                  )
                }
              />
            </div>

            <div>
              {pointers.map(({ id, text }, index) => (
                <div key={id} className="form-field">
                  <label htmlFor="">
                    Achivement or Responsibility {index + 1}
                  </label>
                  <input
                    type="text"
                    value={text}
                    onChange={(e) =>
                      setExperiences(
                        experiences.map((experience) =>
                          experience.id === experienceId
                            ? {
                                ...experience,
                                pointers: experience.pointers.map((pointer) =>
                                  pointer.id === id
                                    ? { ...pointer, text: e.target.value }
                                    : pointer,
                                ),
                              }
                            : experience,
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

export default ExperienceForm;

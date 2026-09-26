function ExperienceForm({ experiences, setExperiences }) {
  return (
    <div>
      {experiences.map(
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
          <div key={id}>
            <label htmlFor="">Job Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) =>
                experiences.map((experience) =>
                  experience.id === id
                    ? { ...experience, title: e.target.value }
                    : experience,
                )
              }
            />

            <label htmlFor="">Starting Month And Year</label>
            <input
              type="text"
              value={startMonthYear}
              onChange={(e) =>
                experiences.map((experience) =>
                  experience.id === id
                    ? { ...experience, startMonthYear: e.target.value }
                    : experience,
                )
              }
            />

            <label htmlFor="">Ending Month And Year</label>
            <input
              type="text"
              value={endMonthYear}
              onChange={(e) =>
                experiences.map((experience) =>
                  experience.id === id
                    ? { ...experience, endMonthYear: e.target.value }
                    : experience,
                )
              }
            />

            <label htmlFor="">Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) =>
                experiences.map((experience) =>
                  experience.id === id
                    ? { ...experience, companyName: e.target.value }
                    : experience,
                )
              }
            />

            <label htmlFor="">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) =>
                experiences.map((experience) =>
                  experience.id === id
                    ? { ...experience, city: e.target.value }
                    : experience,
                )
              }
            />

            <label htmlFor="">Country</label>
            <input
              type="text"
              value={title}
              onChange={(e) =>
                experiences.map((experience) =>
                  experience.id === id
                    ? { ...experience, country: e.target.value }
                    : experience,
                )
              }
            />

            {pointers.map(({ id, text }, index) => (
              <div key={id}>
                <label htmlFor="">
                  Achivement or Responsibility {index + 1}
                </label>
                <input
                  type="text"
                  value={text}
                  onChange={(e) =>
                    experiences.pointers.map((pointer) =>
                      pointers.id === id
                        ? { ...pointer, text: e.target.value }
                        : pointer,
                    )
                  }
                />
              </div>
            ))}
          </div>
        ),
      )}
    </div>
  );
}

export default ExperienceForm;

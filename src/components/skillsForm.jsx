function SkillsForm({ skills, setSkills }) {
  return (
    <div>
      {skills.map(({ id, category, technologies }) => (
        <div key={id} className="form-entry">
          <div className="form-field">
            <label htmlFor="">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) =>
                setSkills(
                  skills.map((skill) =>
                    skill.id === id
                      ? { ...skill, category: e.target.value }
                      : skill,
                  ),
                )
              }
            />
          </div>

          <div className="form-field">
            <label htmlFor="">Technologies</label>
            <input
              type="text"
              value={technologies}
              onChange={(e) =>
                setSkills(
                  skills.map((skill) =>
                    skill.id === id
                      ? { ...skill, technologies: e.target.value }
                      : skill,
                  ),
                )
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsForm;

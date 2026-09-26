function AchievementsForm({ achievements, setAchievements }) {
  return (
    <div>
      {achievements.map(({ id, text }, index) => (
        <div key={id} className="form-entry">
          <div className="form-field">
            <label htmlFor="">Achievement {index + 1}</label>
            <input
              type="text"
              value={text}
              onChange={(e) =>
                setAchievements(
                  achievements.map((achievement) =>
                    achievement.id === id
                      ? { ...achievement, text: e.target.value }
                      : achievement,
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

export default AchievementsForm;

function Achievements({ achievements }) {
    return (
        <section className="resume-section">
            <h3>ACHIEVEMENTS</h3>

            <ul className="entry-points">
                {achievements.map(({id, text}) => (
                    <li key={id}>[{text}]</li>
                ))}
            </ul>
        </section>
    )
}

export default Achievements;
function Skills({skills}) {
    return (
        <section className="resume-section">
            <h2>SKILLS</h2>
            {skills.map(({id, category, technologies}) => (
                <dl key={id} className="skill-row">
                    <dt>{category}</dt>
                    <dd>[{technologies}]</dd>
                </dl>
            ))}
        </section>
    )
}

export default Skills;
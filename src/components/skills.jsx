function Skills({skills}) {
    return (
        <div>
            {skills.map(({id, category, technologies}) => (
                <dl key={id}>
                    <dt>{category}</dt>
                    <dd>[{technologies}]</dd>
                </dl>
            ))}
        </div>
    )
}

export default Skills;
import './TechStack.scss';

const TechStack = (props) => {
    return (
        <div className="tech-stack">
            <h4 className="tech-stack__title">{props.title}</h4>
            <ul className="tech-stack__list">
                <li className="tech-stack__list-item">HTML</li>
                <li className="tech-stack__list-item">CSS</li>
                <li className="tech-stack__list-item">JavaScript</li>
                <li className="tech-stack__list-item">React</li>
                <li className="tech-stack__list-item">Vite</li>
                <li className="tech-stack__list-item">AWS</li>
                <li className="tech-stack__list-item">Lambda</li>
            </ul>
        </div>
    );
}

TechStack.defaultProps = {
    title: 'Tech Stack'
};

export default TechStack;
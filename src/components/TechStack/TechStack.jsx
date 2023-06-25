import './TechStack.scss';

const TechStack = (props) => {
    const techList = props.list;

    return (
        <div className="tech-stack">
            <h4 className="tech-stack__title">{props.title}</h4>
            <ul className="tech-stack__list">
                {techList && techList.map((item, index) => <li key={index} className="tech-stack__list-item">{item}</li>)}
            </ul>
        </div>
    );
}

TechStack.defaultProps = {
    title: 'Tech Stack'
};

export default TechStack;
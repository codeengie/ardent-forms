import './ProjectListing.scss';
import TechStack from "../TechStack/TechStack.jsx";

const ProjectListing = (props) => {
    return (
        <div className="project-listing">
            <img className="project-listing__img" src="https://placehold.co/290x140" alt="Placeholder"/>
            <h3 className="project-listing__title">{props.projectData.title}</h3>
            <p className="project-listing__detail">{props.projectData.info}</p>
            <TechStack list={props.projectData.tech}/>
            <div className="project-listing__links">
                <a className="project-listing__link" href={props.projectData.url} rel="noreferrer" target="_blank">{`View ${props.projectData.type}`}</a>
            </div>
        </div>
    );
}

export default ProjectListing;
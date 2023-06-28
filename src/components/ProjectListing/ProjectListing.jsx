import './ProjectListing.scss';
import TechStack from "../TechStack/TechStack.jsx";

const ProjectListing = (props) => {
    return (
        <div className="project-listing">
            <img
                className="project-listing__img"
                src={props.projectData.image.source}
                alt={props.projectData.image.alt}
            />
            <h3 className="project-listing__title">{props.projectData.title}</h3>
            <p className="project-listing__detail">{props.projectData.info}</p>
            <TechStack list={props.projectData.tech}/>
            {props.projectData.code && (
                <>
                    <h4 className="project-listing__subtitle">Code</h4>
                    <p className="project-listing__code">Source code is private but readily available to share with potential employers upon request.</p>
                </>
            )}
            <div className="project-listing__links">
                <a className="project-listing__link" href={props.projectData.url} rel="noreferrer" target="_blank">{`View ${props.projectData.type}`}</a>
                {props.projectData.demo && (
                    <p className="project-listing__disclaimer">* Requires user credentials, available upon request</p>
                )}
            </div>
        </div>
    );
}

export default ProjectListing;
import './ProjectListing.scss';
import TechStack from "../TechStack/TechStack.jsx";

const ProjectListing = (props) => {
    return (
        <div className="project-listing">
            <img
                className="project-listing__img"
                src={props.data.Image.Source}
                alt={props.data.Image.Alt}
            />
            <h3 className="project-listing__title">{props.data.Title}</h3>
            <p className="project-listing__detail">{props.data.Info}</p>
            <TechStack list={props.data.Tech}/>
            {props.data.Code && (
                <>
                    <h4 className="project-listing__subtitle">Code</h4>
                    <p className="project-listing__code">Source code is private but readily available to share with potential employers upon request.</p>
                </>
            )}
            <div className="project-listing__links">
                <a className="project-listing__link" href={props.data.Url} rel="noreferrer" target="_blank">{`View ${props.data.Type}`}</a>
                {props.data.Demo && (
                    <p className="project-listing__disclaimer">* Requires user credentials, available upon request</p>
                )}
            </div>
        </div>
    );
}

export default ProjectListing;
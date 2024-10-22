import './ProjectListing.scss';
import TechStack from "../TechStack/TechStack.jsx";
import Button from '../Button/Button.jsx';

const ProjectListing = (props) => {
    // Remove `.webp` from image data @todo Fix this in the DB
    const imageName = props.data.Image.Source.replace(/\.webp/g, '');
    const viewports = [576, 768, 992, 1200];
    const imageSources = viewports
        .map(view => `${import.meta.env.VITE_IMG_URL}${imageName}-${view}w.webp ${view}w`)
        .toString();
    const customClass = props.data?.Url && props.data?.Code ? 'project-listing__links project-listing__links--row' : 'project-listing__links';

    return (
        <div className="project-listing">
            <img
                alt={props.data.Image.Alt}
                className="project-listing__img"
                height="204"
                loading="lazy"
                srcSet={imageSources}
                sizes="
                    (max-width: 576px) 576w,
                    (max-width: 768px) 768w,
                    (max-width: 992px) 992w,
                    (max-width: 1200px) 1200w"
                src={`${import.meta.env.VITE_IMG_URL}${imageName}-1200w.webp`}
                width="280"
            />
            <h3 className="project-listing__title">{props.data.Title}</h3>
            <p className="project-listing__detail">{props.data.Info}</p>
            <TechStack list={props.data.Tech}/>
            {props.data.Code?.Private !== undefined && props.data.Code.Private && (
                <>
                    <h4 className="project-listing__subtitle">Code</h4>
                    <p className="project-listing__code">Source code is private but readily available to share with potential employers upon request.</p>
                </>
            )}
            {(props.data?.Url || props.data?.Code) && (
                <div className={customClass}>
                    {props.data?.Url && (
                        <Button
                            cName="project-listing__link"
                            text={`View ${props.data.Type}`}
                            url={props.data.Url}
                            variant="link"
                        />
                    )}
                    {props.data?.Code && (
                        <Button
                            cName="project-listing__link"
                            text="View Source"
                            url={props.data.Code.Url}
                            variant="code"
                        />
                    )}
                </div>
            )}
        </div>
    );
}

export default ProjectListing;
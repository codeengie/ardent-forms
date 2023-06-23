import './ProjectListing.scss';
import TechStack from "../TechStack/TechStack.jsx";

const ProjectListing = () => {
    return (
        <div className="project-listing">
            <img className="project-listing__img" src="https://placehold.co/290x140" alt="Placeholder"/>
            <h3 className="project-listing__title">ShelfDat</h3>
            <p className="project-listing__detail">Risus ultricies tristique nulla aliquet enim tortor. Fermentum posuere urna nec tincidunt praesent semper feugiat. Non sodales neque sodales ut etiam sit amet nisl purus. Varius vel pharetra vel turpis. Nibh nisl condimentum id venenatis a condimentum vitae. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare.</p>
            <TechStack/>
        </div>
    );
}

export default ProjectListing;
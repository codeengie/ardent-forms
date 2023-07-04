import ProjectListing from "../components/ProjectListing/ProjectListing.jsx";
import { useContext } from 'react';
import PortfolioContext from '../../store/portfolio-context.jsx';
import SkeletonLoader from '../components/SkeletonLoader/SkeletonLoader.jsx';

const Projects = () => {
    const ctx = useContext(PortfolioContext);
    let content = '';

    // Output job listing
    if (ctx.portfolio.length > 0) {
        content = ctx.portfolio
            .filter(project => project['RecordType'] === 'project')
            .map((project, index) => <ProjectListing key={index} data={project}/>);
    }

    if (ctx.error) {
        content = <p>{ctx.error}</p>
    }

    // Display loader while fetching data
    if (ctx.isLoading) {
        content = <SkeletonLoader/>
    }

    return (
        <section className="projects" id="projectsRef">
            <h2 className="projects__title">Projects</h2>
            {content}
        </section>
    );
}

export default Projects;
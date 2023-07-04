import ProjectListing from "../components/ProjectListing/ProjectListing.jsx";
import { useContext } from 'react';
import PortfolioContext from '../../store/portfolio-context.jsx';

const Projects = () => {
    const ctx = useContext(PortfolioContext);

    return (
        <section className="projects" id="projectsRef">
            <h2 className="projects__title">Projects</h2>
            {ctx.portfolio
                .filter(project => project['RecordType'] === 'project')
                .map((project, index) => <ProjectListing key={index} data={project}/>)}
        </section>
    );
}

export default Projects;
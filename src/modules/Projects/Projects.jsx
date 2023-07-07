import ProjectListing from "../../components/ProjectListing/ProjectListing.jsx";
import {useContext, useEffect, useRef} from 'react';
import PortfolioContext from '../../../store/portfolio-context.jsx';
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader.jsx';
import ScrollContext from '../../../store/scroll-context.jsx';
import './Projects.scss';

const Projects = () => {
    const ctx = useContext(PortfolioContext);
    const ctxScroll = useContext(ScrollContext);
    const projectsRef = useRef();
    let content = '';

    // Output job listing
    if (ctx.portfolio.length > 0) {
        content = ctx.portfolio
            .filter(project => project['RecordType'] === 'project')
            .sort((a, b) => new Date(b.Date) - new Date(a.Date))
            .map((project, index) => <ProjectListing key={index} data={project}/>);
    }

    if (ctx.error) {
        content = <p>{ctx.error}</p>
    }

    // Display loader while fetching data
    if (ctx.isLoading) {
        content = <SkeletonLoader/>
    }

    useEffect(() => {
        if (ctxScroll.scrollToRef === 'projectsRef') {
            ctxScroll.handleScrollToRef(projectsRef);
        }
    }, [ctxScroll.scrollToRef, ctxScroll.handleScrollToRef, ctxScroll]);

    return (
        <section className="projects" ref={projectsRef}>
            <h2 className="projects__title">Projects</h2>
            <div className="projects__wrap">
                {content}
            </div>
        </section>
    );
}

export default Projects;
import JobListing from '../components/JobListing/JobListing.jsx';
import { useContext } from 'react';
import PortfolioContext from '../../store/portfolio-context.jsx';
import SkeletonLoader from '../components/SkeletonLoader/SkeletonLoader.jsx';

const Experience = () => {
    const ctx = useContext(PortfolioContext);
    let content = '';

    // Output job listing
    if (ctx.portfolio.length > 0) {
        content = ctx.portfolio
            .filter(job => job['RecordType'] === 'job')
            .map((job, index) => <JobListing key={index} data={job}/>);
    }

    // Display loader while fetching data
    if (ctx.isLoading) {
        content = <SkeletonLoader/>;
    }

    return (
        <section className="experience" id="experienceRef">
            <h2 className="experience__title">Experience</h2>
            {content}
        </section>
    );
}

export default Experience;
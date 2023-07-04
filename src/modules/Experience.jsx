import JobListing from '../components/JobListing/JobListing.jsx';
import { useContext } from 'react';
import PortfolioContext from '../../store/portfolio-context.jsx';

const Experience = () => {
    const ctx = useContext(PortfolioContext);

    return (
        <section className="experience" id="experienceRef">
            <h2 className="experience__title">Experience</h2>
            {ctx.portfolio
                .filter(job => job['RecordType'] === 'job')
                .map((job, index) => <JobListing key={index} data={job}/>)}
        </section>
    );
}

export default Experience;
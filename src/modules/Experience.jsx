import JobListing from '../components/JobListing/JobListing.jsx';
import { useContext, useEffect, useRef } from 'react';
import PortfolioContext from '../../store/portfolio-context.jsx';
import SkeletonLoader from '../components/SkeletonLoader/SkeletonLoader.jsx';
import scrollContext from '../../store/scroll-context.jsx';

const Experience = () => {
    const ctx = useContext(PortfolioContext);
    const ctxScroll = useContext(scrollContext);
    const experienceRef = useRef();
    let content = '';

    // Output job listing
    if (ctx.portfolio.length > 0) {
        content = ctx.portfolio
            .filter(job => job['RecordType'] === 'job')
            .map((job, index) => <JobListing key={index} data={job}/>);
    }

    if (ctx.error) {
        content = <p>{ctx.error}</p>
    }

    // Display loader while fetching data
    if (ctx.isLoading) {
        content = <SkeletonLoader/>;
    }

    useEffect(() => {
        if (ctxScroll.scrollToRef === 'experienceRef') {
            ctxScroll.handleScrollToRef(experienceRef);
        }
    }, [ctxScroll.scrollToRef, ctxScroll.handleScrollToRef, ctxScroll]);

    return (
        <section className="experience" ref={experienceRef}>
            <h2 className="experience__title">Experience</h2>
            {content}
        </section>
    );
}

export default Experience;
import JobListing from "../components/JobListing/JobListing.jsx";

const Experience = () => {
    // This is temporary data while I implement API and DB
    // @todo Refactor to use API
    const jobs = [
        {
            company: 'Stamps.com',
            date: {
                from: '2014-08-12',
                to: '2022-03-26'
            },
            info: 'Stamps.com is an independent vendor that provides internet based mailing and shipping services for USPS and UPS. As a Senior Web Developer at Stamps.com I had the opportunity to contribute to the growth and success of a leading e-commerce and shipping solutions provider. I collaborated, actively participated in design, development, and maintenance of the company\'s web-based applications.',
            tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Angular', '.NET', 'SQL', 'Azure', 'AWS', 'Gulp'],
            title: 'Senior Web Developer'
        },
        {
            company: 'Nexon Of America',
            date: {
                from: '2011-02-07',
                to: '2014-08-02'
            },
            info: 'Nexon America is a video game publisher that specializes in free-to-play games for PC and mobile phones. As a Front-End Developer at Nexon America I had the opportunity to work on cutting-edge projects that shaped the player experience across various gaming platforms. I played a key role in translating design concepts into seamless, responsive, visually stunning user interfaces that optimized performance and usability. ',
            tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Node.js', 'Akamai', 'Jenkins', 'Grunt'],
            title: 'Front-End Developer'
        }
    ];

    return (
        <section className="experience" id="experienceRef">
            <h2 className="experience__title">Experience</h2>
            {jobs.map((job, index) => <JobListing key={index} cName="experience__listing" data={job}/>)}
        </section>
    );
}

export default Experience;
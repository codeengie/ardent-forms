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
            info: 'Parturient montes nascetur ridiculus mus mauris vitae. Ultricies mi eget mauris pharetra et ultrices neque ornare. Orci ac auctor augue mauris augue neque gravida in fermentum.',
            tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'AWS', 'Lambda'],
            title: 'Senior Web Developer'
        },
        {
            company: 'Nexon Of America',
            date: {
                from: '2011-02-07',
                to: '2014-08-02'
            },
            info: 'Pellentesque id nibh tortor id aliquet lectus. Risus pretium quam vulputate dignissim suspendisse in est ante in.',
            tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Node.js', 'Akamai', 'Jenkins'],
            title: 'Front-End Developer'
        }
    ];

    return (
        <section className="experience">
            <h2 className="experience__title">Experience</h2>
            {jobs.map((job, index) => <JobListing key={index} cName="experience__listing" data={job}/>)}
        </section>
    );
}

export default Experience;
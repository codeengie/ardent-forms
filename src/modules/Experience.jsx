import JobListing from "../components/JobListing.jsx";

const Experience = () => {
    return (
        <section className="experience">
            <h2 className="experience__title">Experience</h2>
            <JobListing cName="experience__listing"/>
        </section>
    );
}

export default Experience;
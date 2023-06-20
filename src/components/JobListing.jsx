import './JobListing.scss';
import TechListing from "./TechListing.jsx";

const JobListing = (props) => {
    return (
        // @todo Look into this linting error: "Missing in props validation"
        <div className={`job-info ${props.cName}`}>
            <p>
                <time dateTime="2015-08-01">August 2014</time> - <time dateTime="2022-03-26">March 2022</time>
            </p>
            <h3 className="job-info__title">Senior Web Developer &middot; Stamps.com</h3>
            <p className="job-info__text">Delivered high-quality, robust production code for a diverse array of projects.</p>
            <div className="job-info__tech">
                <TechListing text="HTML"/>
                <TechListing text="CSS"/>
                <TechListing text="React"/>
            </div>
        </div>
    );
}

export default JobListing;
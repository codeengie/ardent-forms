import './JobListing.scss';
import TechStack from "../TechStack/TechStack.jsx";

const JobListing = (props) => {
    return (
        // @todo Look into this linting error: "Missing in props validation"
        <div className={`job-listing ${props.cName}`}>
            <p>
                <time dateTime="2015-08-01">Aug 2014</time> - <time dateTime="2022-03-26">Mar 2022</time>
            </p>
            <h3 className="job-listing__title">Senior Web Developer &middot; Stamps.com</h3>
            <p className="job-listing__text">Delivered high-quality, robust production code for a diverse array of projects. Sed egestas egestas fringilla phasellus. Nisi porta lorem mollis aliquam ut porttitor leo.</p>
            <TechStack title="Tech"/>
        </div>
    );
}

export default JobListing;
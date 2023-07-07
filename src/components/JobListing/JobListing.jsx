import './JobListing.scss';
import TechStack from '../TechStack/TechStack.jsx';

const JobListing = (props) => {
    const formatDate = (date) => {
        const transformedDate = new Date(date);
        const month = transformedDate.toLocaleDateString('default', { month: 'short' });
        const year = transformedDate.getFullYear();

        return `${month} ${year}`;
    };

    const fromDate = formatDate(props.data.DateRange.From);
    const toDate = formatDate(props.data.DateRange.To);

    return (
        // @todo Look into this linting error: "Missing in props validation"
        <div className="job-listing">
            <div className="job-listing__time-wrap">
                <time className="job-listing__time" dateTime={props.data.DateRange.From}>{fromDate}</time> - <time className="job-listing__time" dateTime={props.data.DateRange.To}>{toDate}</time>
            </div>
            <h3 className="job-listing__title">{props.data.Title} &middot; {props.data.Company}</h3>
            <p className="job-listing__text">{props.data.Info}</p>
            <TechStack title="Tech Used" list={props.data.Tech}/>
        </div>
    );
}

export default JobListing;
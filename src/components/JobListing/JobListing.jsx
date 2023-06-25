import { useState } from 'react';
import './JobListing.scss';
import TechStack from "../TechStack/TechStack.jsx";

const JobListing = (props) => {
    const formatDate = (date) => {
        const transformedDate = new Date(date);
        const month = transformedDate.toLocaleDateString('default', { month: 'short' });
        const year = transformedDate.getFullYear();

        return `${month} ${year}`;
    };

    const fromDate = formatDate(props.data.date.from);
    const toDate = formatDate(props.data.date.to);

    return (
        // @todo Look into this linting error: "Missing in props validation"
        <div className={`job-listing ${props.cName}`}>
            <p>
                <time dateTime={props.data.date.from}>{fromDate}</time> - <time dateTime={props.data.date.to}>{toDate}</time>
            </p>
            <h3 className="job-listing__title">{props.data.title} &middot; {props.data.company}</h3>
            <p className="job-listing__text">{props.data.info}.</p>
            <TechStack title="Tech"/>
        </div>
    );
}

export default JobListing;
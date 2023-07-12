import './SkeletonLoader.scss';

const SkeletonLoader = (props) => {
    const modifier = (props.modifier === 'image') ? 'skeleton skeleton--image' : 'skeleton';
    const skeletons = [];

    // Create as many skeleton as required by count props
    for (let i = 0; i < props.count; i++) {
        skeletons.push(
            <div className={modifier} key={i}>
                <span className="skeleton__hidden" aria-hidden="false">Loading... Please wait.</span>
                <p className="skeleton__time" aria-hidden="true"></p>
                <h3 className="skeleton__title" aria-hidden="true"></h3>
                <p className="skeleton__body" aria-hidden="true"></p>
                <h4 className="skeleton__subtitle" aria-hidden="true"></h4>
                <ul className="skeleton__list" aria-hidden="true">
                    <li className="skeleton__list-item" aria-hidden="true"></li>
                    <li className="skeleton__list-item" aria-hidden="true"></li>
                    <li className="skeleton__list-item" aria-hidden="true"></li>
                    <li className="skeleton__list-item" aria-hidden="true"></li>
                </ul>
            </div>
        );
    }

    return (
        skeletons
    );
};

export default SkeletonLoader;
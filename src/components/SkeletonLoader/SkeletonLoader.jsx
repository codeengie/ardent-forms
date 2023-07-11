import './SkeletonLoader.scss';

const SkeletonLoader = (props) => {
    const modifier = (props.modifier === 'image') ? 'skeleton skeleton--image' : 'skeleton';
    const skeletons = [];

    // Create as many skeleton as required by count props
    for (let i = 0; i < props.count; i++) {
        skeletons.push(
            <div className={modifier} key={i}>
                <p className="skeleton__time"></p>
                <h3 className="skeleton__title"></h3>
                <p className="skeleton__body"></p>
                <h4 className="skeleton__subtitle"></h4>
                <ul className="skeleton__list">
                    <li className="skeleton__list-item"></li>
                    <li className="skeleton__list-item"></li>
                    <li className="skeleton__list-item"></li>
                    <li className="skeleton__list-item"></li>
                </ul>
            </div>
        );
    }

    return (
        skeletons
    );
};

export default SkeletonLoader;
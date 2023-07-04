import './SkeletonLoader.scss';

const SkeletonLoader = (props) => {
    const modifier = props.modifier ? 'skeleton skeleton--image' : 'skeleton';

    return (
        <div className={modifier}>
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
};

export default SkeletonLoader;
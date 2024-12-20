import './Brand.scss';
import brandLogo from '../../assets/images/logo.svg';

const Brand = () => {
    return (
        <h1 className="brand">
            <img className="brand__logo" src={brandLogo} width="176" height="29" alt="Add Your Logo"/>
        </h1>
    );
}

export default Brand;
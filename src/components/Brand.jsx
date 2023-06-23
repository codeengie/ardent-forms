import brandLogo from '../assets/logo.svg';

const Brand = () => {
    return (
        <h1 className="brand">
            <img className="brand__logo" src={brandLogo} width="176" alt="Ardent Forms Logo"/>
        </h1>
    );
}

export default Brand;
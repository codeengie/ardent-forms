import './Footer.scss';

const Footer = () => {
    const currentDate = new Date().getFullYear();

    return (
        <footer className="footer">
            <small className="footer__text">Copyright &copy; {currentDate} Add Website Name. All Rights Reserved.</small>
        </footer>
    );
}

export default Footer;
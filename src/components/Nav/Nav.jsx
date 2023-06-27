import { useContext } from "react";
import ReactDOM from "react-dom";
import './Nav.scss';
import MenuContext from "../../../store/menu-context.jsx";

const Backdrop = () => {
    const ctxBackdrop = useContext(MenuContext);
    const toggleClass = ctxBackdrop.isMenuOpen ? 'backdrop backdrop--show' : 'backdrop';
    return <div className={toggleClass} onClick={ctxBackdrop.onMenuClick}></div>
}

const Nav = () => {
    const ctxMenu = useContext(MenuContext);
    const toggleClass = ctxMenu.isMenuOpen ? 'nav nav--open' : 'nav';

    const handleLinkClick = () => {
        ctxMenu.onMenuClick();
    };

    return (
        <>
            {ReactDOM.createPortal(<Backdrop/>, document.getElementById('backdrop-root'))}
            <nav className={toggleClass}>
                <div className="nav__backdrop"></div>
                <ul className="nav__list">
                    <li className="nav__list-item">
                        <a className="nav__list-link" href="#aboutRef" onClick={handleLinkClick}>About</a>
                    </li>
                    <li className="nav__list-item">
                        <a className="nav__list-link" href="#experienceRef" onClick={handleLinkClick}>Experience</a>
                    </li>
                    <li className="nav__list-item">
                        <a className="nav__list-link" href="#projectsRef" onClick={handleLinkClick}>Projects</a>
                    </li>
                    <li className="nav__list-item">
                        <a className="nav__list-link" href="#contactRef" onClick={handleLinkClick}>Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;
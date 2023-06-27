import { useContext } from "react";
import ReactDOM from "react-dom";
import './Nav.scss';
import MenuContext from "../../../store/menu-context.jsx";

const Backdrop = () => {
    const ctx = useContext(MenuContext);
    const toggleClass = ctx.isMenuOpen ? 'backdrop backdrop--show' : 'backdrop';
    return <div className={toggleClass} onClick={ctx.onMenuClick}></div>
}

const Nav = () => {
    const ctx = useContext(MenuContext);
    const toggleClass = ctx.isMenuOpen ? 'nav nav--open' : 'nav';

    return (
        <>
            {ReactDOM.createPortal(<Backdrop/>, document.getElementById('backdrop-root'))}
            <nav className={toggleClass}>
                <div className="nav__backdrop"></div>
                <ul className="nav__list">
                    <li className="nav__list-item">
                        <a className="nav__list-link" href="#">About</a>
                    </li>
                    <li className="nav__list-item">
                        <a className="nav__list-link" href="#">Experience</a>
                    </li>
                    <li className="nav__list-item">
                        <a className="nav__list-link" href="#">Projects</a>
                    </li>
                    <li className="nav__list-item">
                        <a className="nav__list-link" href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;
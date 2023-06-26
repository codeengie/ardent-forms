import { useContext } from "react";
import './Nav.scss';
import MenuContext from "../../../store/menu-context.jsx";

const Nav = () => {
    const ctx = useContext(MenuContext);
    const toggleClass = ctx.isMenuOpen ? 'nav nav--open' : 'nav';

    return (
        <nav className={toggleClass}>
            <ul className="nav__list">
                <li className="nav__list-item">About</li>
                <li className="nav__list-item">Experience</li>
                <li className="nav__list-item">Projects</li>
                <li className="nav__list-item">Contact</li>
            </ul>
        </nav>
    );
}

export default Nav;
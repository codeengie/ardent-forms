import { useContext, useEffect, useRef, useState } from 'react';
import './Nav.scss';
import MenuContext from '../../../store/menu-context.jsx';

const Nav = () => {
    const ctxMenu = useContext(MenuContext);
    const toggleClass = ctxMenu.isMenuOpen ? 'nav nav--open' : 'nav';
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const resizeObserverRef = useRef(null)

    /*
     * Tapping into the ResizeObserver interface in order to keep track of the dimensional
     * changes of the viewport. This was necessary to help create a conditional so `handleClick()`
     * only fires on a mobile device.
     */
    useEffect(() => {
        resizeObserverRef.current = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setViewportWidth(entry.contentRect.width);
            }
        });

        // Set target element to observe
        resizeObserverRef.current.observe(document.documentElement);

        // This has to return anonymous function otherwise viewport width will not update
        return () => {
            resizeObserverRef.current.disconnect();
        }

    }, []);

    const handleLinkClick = () => {
        if (viewportWidth <= 767) {
            ctxMenu.onMenuClick();
        }
    };

    return (
        <>
            <nav className={toggleClass}>
                <button className="nav__close" type="button" aria-label="Close" onClick={handleLinkClick}></button>
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
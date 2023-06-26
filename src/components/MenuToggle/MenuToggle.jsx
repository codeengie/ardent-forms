import { useContext } from 'react';
import './MenuToggle.scss';
import MenuContext from "../../../store/menu-context.jsx";

const MenuToggle = () => {
    const ctx = useContext(MenuContext);
    const toggleClass = ctx.isMenuOpen ? 'menu-toggle menu-toggle--open' : 'menu-toggle'

    return (
        <div className={toggleClass} onClick={ctx.onMenuClick}>
            <div className="menu-toggle__menu"></div>
        </div>
    );
}

export default MenuToggle;
import { useContext } from 'react';
import './MenuToggle.scss';
import MenuContext from '../../../store/menu-context.jsx';

const MenuToggle = () => {
    const ctx = useContext(MenuContext);

    return (
        <div className="menu-toggle" onClick={ctx.onMenuClick}>
            <div className="menu-toggle__menu"></div>
        </div>
    );
}

export default MenuToggle;
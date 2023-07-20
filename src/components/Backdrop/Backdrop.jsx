import './Backdrop.scss';
import { useContext } from 'react';
import MenuContext from '../../store/menu-context.jsx';

const Backdrop = () => {
    const ctxBackdrop = useContext(MenuContext);
    const toggleClass = ctxBackdrop.isMenuOpen ? 'backdrop backdrop--show' : 'backdrop';

    return (
        <div className={toggleClass} onClick={ctxBackdrop.onMenuClick}></div>
    );
};

export default Backdrop;
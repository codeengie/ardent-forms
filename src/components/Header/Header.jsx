import './Header.scss';
import Brand from '../Brand/Brand.jsx';
import MenuToggle from '../MenuToggle/MenuToggle.jsx';
import Nav from '../Nav/Nav.jsx';
import { MenuContextProvider } from '../../../store/menu-context.jsx';
import Backdrop from '../Backdrop/Backdrop.jsx';

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrap">
                <Brand/>
                <MenuContextProvider>
                    <Nav/>
                    <MenuToggle/>
                    <Backdrop/>
                </MenuContextProvider>
            </div>
        </header>
    );
}

export default Header;
import './Header.scss';
import Brand from "../Brand.jsx";
import MenuToggle from "../MenuToggle/MenuToggle.jsx";
import Nav from "../Nav/Nav.jsx";
import { MenuContextProvider } from "../../../store/menu-context.jsx";

const Header = () => {
    return (
        <header className="header">
            <Brand/>
            <MenuContextProvider>
                <Nav/>
                <MenuToggle/>
            </MenuContextProvider>
        </header>
    );
}

export default Header;
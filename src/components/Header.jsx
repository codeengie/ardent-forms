import './Header.scss';
import Brand from "./Brand.jsx";
import MenuToggle from "./MenuToggle.jsx";

const Header = () => {
    return (
        <header className="header">
            <Brand/>
            <MenuToggle/>
        </header>
    );
}

export default Header;
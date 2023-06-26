import React, { useState } from 'react';

/**
 * Rather than to spread my state logic all over the place I opted to keep it
 * focused in this file.
 * @type {React.Context<{isMenuOpen: boolean}>}
 */

const MenuContext = React.createContext({
    isMenuOpen: false
});

export const MenuContextProvider = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuState = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return <MenuContext.Provider value={{isMenuOpen: isMenuOpen, onMenuClick: handleMenuState}}>{props.children}</MenuContext.Provider>
};

export default MenuContext;
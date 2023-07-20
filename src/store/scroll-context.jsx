import React, { useState } from 'react';

const ScrollContext = React.createContext();

export const ScrollContextProvider = (props) => {
const [scrollToRef, setScrollToRef] = useState(null);

    const getElementData = (data) => {
        setScrollToRef(data);
    }

    const handleScrollToRef = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return <ScrollContext.Provider value={{scrollToRef, setScrollToRef, getElementData, handleScrollToRef}}>{props.children}</ScrollContext.Provider>
};

export default ScrollContext;
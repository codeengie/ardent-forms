import React, { useCallback, useEffect, useState } from 'react';

const PortfolioContext = React.createContext({
    portfolio: []
});

export const PortfolioContextProvider = (props) => {
    const [portfolio, setPortfolio] = useState([]);

    const fetchPortfolio = useCallback(async () => {
        const settings = {
            method: 'GET'/*,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': import.meta.env.VITE_API_KEY
            }*/
        };

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/portfolio`, settings);

            if (!response.ok) {
                new Error(`Request failed with status: ${response.status}`);
            }

            const data = await response.json();

            setPortfolio(JSON.parse(data.body));
            console.log(JSON.parse(data.body));
        } catch (error) {
            console.log('Error:', error.message)
        }
    }, []);

    /*const filterPortfolio = filterBy => {
        const filtered = portfolio.filter(item => item.includes())
    };*/

    useEffect(() => {
        fetchPortfolio();
    }, [fetchPortfolio]);

    return <PortfolioContext.Provider value={{portfolio: portfolio}}>{props.children}</PortfolioContext.Provider>
}

export default PortfolioContext;
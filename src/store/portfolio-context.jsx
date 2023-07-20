import React, { useCallback, useEffect, useState } from 'react';

const PortfolioContext = React.createContext({
    error: null,
    isLoading: false,
    portfolio: []
});

export const PortfolioContextProvider = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [portfolio, setPortfolio] = useState([]);
    const [error, setError] = useState(null);

    const fetchPortfolio = useCallback(async () => {
        const settings = {
            method: 'GET'/*,
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': import.meta.env.VITE_API_KEY
            }*/
        };

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/portfolio`, settings);

            if (!response.ok) {
                console.log('foobar');
                new Error(`Request failed with status: ${response.status}`);
            }

            const data = await response.json();
            setPortfolio(JSON.parse(data.body));
        } catch (error) {
            setError(error.message);
            console.log('Error:', error.message)
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchPortfolio();
    }, [fetchPortfolio]);

    return <PortfolioContext.Provider value={{error: error, isLoading: isLoading, portfolio: portfolio}}>{props.children}</PortfolioContext.Provider>
}

export default PortfolioContext;
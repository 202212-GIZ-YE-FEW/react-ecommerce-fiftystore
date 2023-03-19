import { useState, useEffect, createContext, useContext } from 'react'

// Create Context object.
const SearchContext = createContext()

// Export Provider.
export function SearchProvider({ children }) {
    const [ items, setItemsToSearchFrom ] = useState([]);
	const [ searchResults, setSearchResults ] = useState([]);

    const setItemsToSearchFromFn = (products) => {
        setItemsToSearchFrom(() => products);
    }

    const searchFn = (title) => {
        setSearchResults(() => items.filter(product => product.title.toLowerCase().includes(title.toLowerCase())))
    }


	return (
	   <SearchContext.Provider value={{ items, searchResults, setItemsToSearchFromFn, searchFn }}>
		{children}
	   </SearchContext.Provider>
	)
}

// Export useContext Hook.
export function useSearchContext() {
	return useContext(SearchContext);
}
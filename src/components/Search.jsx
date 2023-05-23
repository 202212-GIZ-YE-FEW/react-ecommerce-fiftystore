import { useEffect, useState } from 'react'
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Overlay } from "./Overlay"
import { SearchResults } from './SearchResults';
import { getProductsByTitle } from '../../utils/API';
export const Search = ({ data }) => {
    const [ searchModal,  setSearchModal] = useState(false);
    const [ searchState, setSearchState ] = useState("");
    const [ searchResults, setSearchResults ] = useState([]);

    useEffect(() => {
        searchState ?
            getProductsByTitle(data, searchState, setSearchResults)
             : setSearchResults([]);
    }, [searchState]);

    return (
        <>
            <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer text-gray-400 group-hover:text-gray-500"
              aria-hidden="true" onClick={() => setSearchModal(true)} />
            {searchModal &&
                <>
                    <Overlay />
                    <div  id="search-bar" className="flex flex-row-reverse z-50 justify-between items-center max-w-[1520px] w-3/4 absolute top-20 left-1/2 -translate-x-1/2 rounded-md bg-white py-3 px-4 z-10 shadow-lg">
                        <XMarkIcon className="h-6 w-6 ml-4 cursor-pointer text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true" onClick={() => setSearchModal(false)} />
                        <div className="grow">
                            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <input 
                                type="search" 
                                id="search" 
                                className="w-full py-2 pr-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:border-gray-500 rounded-full" 
                                placeholder="Search..." 
                                value={searchState}
                                onChange={(e) => {setSearchState(e.target.value)}} />
                                <SearchResults searchResults={searchResults} onClick={(e) => setSearchModal(!searchModal)} />
                        </div>
                    </div>

                </>
            }
        </>
    )
}
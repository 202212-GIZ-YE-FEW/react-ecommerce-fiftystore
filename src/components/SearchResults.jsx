import { useState } from 'react'
import { searchResults } from "./Search"
export const SearchResults = ({ searchResults }) => {
    return (
        <>
            <div className="flex justify-between items-center max-w-[1520px] w-3/4 absolute top-20 left-1/2 -translate-x-1/2 rounded-md bg-white py-3 px-4 z-10 shadow-lg">
                <ul role="list" className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                    {searchResults.map((res) => 
                        <li className="py-3 sm:py-4" key={res.id}>
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 w-8 h-8">
                                    <img className="w-full rounded-full" src={res.image} alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {res.title}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        {res.description}
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    ${res.price}
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}
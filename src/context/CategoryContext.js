import { createContext, useState, useContext } from "react";
import { getAllCategories } from '../utils/API';
const CategoryContext = createContext();

export function CategoryProvider({ children }){
    const [categories, setCategories] = useState([]);
    getAllCategories().then(data => setCategories(data));
    return(
        <CategoryContext.Provider value={{ categories }}>
            { children }
        </CategoryContext.Provider>
    )
}
// Export useContext Hook.
export function useCategoryContext() {
	return useContext(CategoryContext);
}
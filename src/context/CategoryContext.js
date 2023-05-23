import { createContext, useState } from "react";
import { getAllCategories } from '../../utils/API';
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
export default CategoryContext;
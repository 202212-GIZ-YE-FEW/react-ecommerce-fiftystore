import { React } from "react";
import { Button } from "../../../src/components/Button";
import { getAllCategories, getAllProductsByCategory } from '../../../utils/API';

function CategoryProducts({ category }) {
    return (
        <div className="flex items-center justify-center m-10">
           CategoryProducts
        </div>
    );
}

export async function getStaticPaths() {
    const categories = await getAllCategories();

    // get categories
    const paths = categories.map(category => ({
        params: { category }
    }));
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const category = await getAllProductsByCategory(`${params.category}`);
    return { props: { category } }
}

export default CategoryProducts;
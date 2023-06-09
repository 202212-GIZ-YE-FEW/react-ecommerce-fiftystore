import { useEffect } from "react";
import Head from 'next/head';
import { useSearchContext } from '../../../context/SearchContext';
import { getAllCategories, getAllProductsByCategory } from '../../../utils/API';
import { Product } from "../../../components/Product"
function CategoryProducts({ products, category }) {

    const {setItemsToSearchFromFn} = useSearchContext();

    useEffect(()=>{
        setItemsToSearchFromFn(products);
    }, []);

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/fifty_logo.ico" type="image/x-icon" />
                <title>{`FiftyStore - ${category} products`}</title>
            </Head>
            <div className="full-screen h-60 mb-10 relative" style={{ backgroundImage: `url(/category.webp)`, backgroundSize: 'cover' }}>
            <h2 className="uppercase font-bold text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-3xl xl:text-6xl text-center">{ category }</h2>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product => <Product 
                            key={product.id} 
                            id={product.id}
                            title={product.title} 
                            description={product.description} 
                            image={product.image}
                            price={product.price}
                            rate={product.rating.rate} />))}
            </div>
        </>
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
    const products = await getAllProductsByCategory(`${params.category}`);
    return { props: { products, category: params.category } }
}

export default CategoryProducts;
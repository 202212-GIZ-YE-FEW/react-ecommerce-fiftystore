import { React } from "react";
import { Button } from "../../src/components/Button";
import { getAllProducts } from '../../utils/API';
import { StarIcon, Bars3CenterLeftIcon } from '@heroicons/react/24/outline';

function SingleProduct({ product }) {
    return (
        <div className="flex items-center justify-center m-10">
            <img className="object-fill h-100 w-96" src={product.image} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-3xl font-bold tracking-tight">{product.title}</h5>
                <div className="flex flex-wrap">
                    <h3 className="mb-2 text-1xl font-bold">Product Details</h3>
                    <Bars3CenterLeftIcon className="object-fill h-6 text-orange-400" />
                </div>
                <p className="mb-3 font-normal">{product.description}</p>
                <h4 className="mb-2 text-1xl font-bold tracking-tight">${product.price}</h4>
                <div className="flex flex-wrap">
                    <h5 className="mb-2 text-1xl font-bold">{product.rating.rate}</h5>
                    <StarIcon className="object-fill h-5 w-5 text-orange-400" />
                </div>
                <div className="flex flex-wrap">
                    <input type="number" defaultValue={1} className="sm:text-center border border-gray-300 rounded w-10 bg-gray-50 mb-1 font-medium text-gray-900 mr-5" />
                    <Button className="btn" content={"Add To Cart"} />
                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const products = await getAllProducts();

    // get ids
    const paths = products.map(product => ({
        params: { id: String(product.id) }
    }));
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const product = await getAllProducts(`products/${params.id}`);
    return { props: { product } }
}

export default SingleProduct;
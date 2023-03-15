import { React } from "react";
import { Button } from "../src/components/Button";
import { getAllProducts } from '../utils/API';

function SingleProduct() {
    const product = {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    };

    return (
        <div className="small-container single-product">
            <div className="row">
                <div className="col-2">
                    <img src={product.image} alt="" width="100%" />
                </div>
                <div className="col-2">
                    <p>{product.category}</p>
                    <h1>{product.title}</h1>
                    <h4>${product.price}</h4>
                    <h5>{product.rating.rate}</h5>

                    <div className="rating">
                        <h5>{product.rating.rate}</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                    </div>

                    <input type="number" defaultValue={1} />
                    <Button className="btn" content={"Add To Cart"} />


                    <div className="icons">
                        <h3>Product Details</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                        </svg>
                    </div>
                    <br />
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths(){
    const products = await getAllProducts();

    // get ids
    const paths = products.map(product => ({
        params: {id: String(product.id)}
    }));
    console.log(paths);
    return { paths, fallback: false}
}

export async function getStaticProps({ params }){
    const product = await getAllProducts(`products/${params.id}`);
    return { props: { product }}
}

export default SingleProduct;
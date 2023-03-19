import { React } from "react";
import { useState, useEffect } from 'react';
import { Button } from "../../components/Button";
import { getAllProducts } from '../../utils/API';
import { StarIcon, Bars3CenterLeftIcon } from '@heroicons/react/24/outline';

function SingleProduct({ product }) {

    const [cartItems, setCartItems] = useState([]);

    // Retrieve cart items from local storage on page load
    useEffect(() => {
        const items = localStorage.getItem('cartItems');
        if (items) {
            setCartItems(JSON.parse(items));
        }
    }, []);

    const addToCart = (item) => {
        const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        let updatedCartItems = [];
        if (itemInCart) {
            updatedCartItems = cartItems.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
        } else {
            updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
        }
        setCartItems(updatedCartItems);
        // Save cart items to local storage
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const increaseQuantity = (id) => {
        const itemIndex = cartItems.findIndex((item) => item.id === id);
        if (itemIndex === -1) {
            // Item not found in cart, add it with quantity 1
            const newItem = { id, quantity: 1 };
            const updatedCartItems = [...cartItems, newItem];
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        } else {
            // Item found in cart, update its quantity
            const updatedCartItems = [...cartItems];
            updatedCartItems[itemIndex].quantity++;
            setCartItems(updatedCartItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        }
    };
    
    const decreaseQuantity = (id) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === id && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1,
                };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    function getProductQuantity(productId) {

        const productInCart = cartItems.find(item => item.id === productId);

        // If the product is found in the cart, return its quantity
        if (productInCart) {
            return productInCart.quantity;
        }

        // If the product is not found in the cart, return 0
        return 0;
    }


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
                    <button
                        onClick={() => decreaseQuantity(product.id)}

                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md focus:outline-none"
                    >
                        -
                    </button>

                    <span className="px-2 text-gray-700"> {getProductQuantity(product.id)}</span>

                    <button
                        onClick={() => increaseQuantity(product.id)}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md focus:outline-none"
                    >
                        +
                    </button>
                    <Button className="btn" content={"Add To Cart"} handleClickFun={() => addToCart(product)} />
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
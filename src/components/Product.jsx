import React, { useState, useEffect } from 'react';
import { Button } from "./Button"
import Link from "next/link"
import { StarIcon } from "@heroicons/react/24/outline"
export const Product = (props) => {

    const { id, title, description, image, price, rate } = props;
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

    return (
        <>
            <div className="w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <Link href={`/products/${id}`} className="block h-64">
                    <img className="p-8 rounded-t-lg max-h-64 max-w-64 w-auto mx-auto" src={image}  alt="product image" />
                </Link>
                <div className="px-5 pb-5 flex flex-col justify-between">
                    <Link href={`/products/${id}`} className="min-h-[1rem] max-h-4 py-10 max-w-64 w-auto mx-auto overflow-hidden">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 m-0 p-0 overflow-hidden">{title.substring(0, 30)} {title.length >= 30 && '...'}</h5>
                    </Link>
                    <div className="flex justify-center items-center mt-2.5 mb-5 flex-row-reverse">
                        {[1, 2, 3, 4, 5].map((i)=> {
                            if(i < Math.round(rate))
                                return <StarIcon key={i} className="w-5 h-5 text-stone-400"/>
                            else
                                return <StarIcon key={i} className="w-5 h-5 text-yellow-500" fill="currentColor"/>
                        })}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <span className="text-2xl lg:text-3xl font-bold text-gray-900 mb-5 sm:mb-0">${price}</span>
                        <Button content={"Add To Cart"} handleClickFun={() => addToCart(props)} />
                    </div>
                </div>
            </div>
        </>
    )
}
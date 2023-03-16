import React, { useState, useEffect } from 'react';
import CartPage from './cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

function Products({ carts }) {
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
    <div>
      <div>
        <Link href="/cart">
          <FontAwesomeIcon icon={faShoppingCart} className="text-2xl mr-2"/>
          <span className="text-lg">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
        </Link>
      </div>
      {carts.map((cart) => (
        <div key={cart.id}>
          <h2>{cart.title}</h2>
          <img src={cart.image} alt={cart.title} />
          <p>{cart.description}</p>
          <p>Price: ${cart.price}</p>
          <button 
            onClick={() => addToCart(cart)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      ))}
      <CartPage cartItems={cartItems} />
    </div>
  );
}

export default Products;

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const carts = await res.json();
  console.log(carts);
 
  return {
    props: {
      carts,
    },
  };
}

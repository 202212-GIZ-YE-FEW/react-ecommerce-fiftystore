import React, { useState, useEffect } from 'react';


function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
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

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };
  return (

    <div className="flex md:flex-row flex-col justify-end " id="cart">
      <div className="lg:w-1/1 w-90 md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
        <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="15 6 9 12 15 18" />
          </svg>
          <p className="text-sm pl-2 leading-none">Back</p>
        </div>
        <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Bag</p>
        {cartItems.map((item) => (
          <div key={item.id} className="md:flex items-center mt-14 py-8 border-t border-gray-200">
            <div className="w-1/4">
              <img src={item.image} alt className={item.title} />
            </div>
            <div className="md:pl-3 md:w-3/4">
              <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4"></p>
              <div className="flex items-center justify-end w-full pt-1">
                <p className="text-base font-black leading-none text-gray-800"></p>
                <button
                   onClick={() => decreaseQuantity(item.id)}

                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md focus:outline-none"
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md focus:outline-none"
                >
                  +
                </button>
              </div>
              <p className="text-lg font-bold text-gray-900 pt-2">{item.title}</p>
              <p className="text-xs leading-3 text-gray-600 py-4">{item.description}</p>
              <p className="w-96 text-xs leading-3 font-bold  text-gray-800">{item.price * item.quantity} USD</p>
              <div className="flex items-center justify-between pt-5 pr-6">
                <div className="flex itemms-center">
                 
                  <button
                     onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-1 ml-2 rounded-md hover:bg-red-700 focus:outline-none"
                  >
                    Remove
                  </button>
                </div>
                <p className="text-base font-black leading-none text-gray-800"></p>
              </div>
            </div>
          </div>

        ))}
      </div>
      <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full mr-12 bg-gray-100 h-full">
        <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
          <div>
            <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
            <div className="flex items-center justify-between pt-16">
              <p className="text-base leading-none text-gray-800">Subtotal</p>
              <p className="text-base leading-none text-gray-800">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="text-base leading-none text-gray-800">Shipping</p>
              <p className="text-base leading-none text-gray-800">$0</p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="text-base leading-none text-gray-800">Tax</p>
              <p className="text-base leading-none text-gray-800">$0</p>
            </div>
          </div>
          <div>
            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
              <p className="text-2xl leading-normal text-gray-800">Total</p>
              <p className="text-2xl font-bold leading-normal text-right text-gray-800">${subtotal.toFixed(2)}</p>
            </div>
            <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default CartPage;

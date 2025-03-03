// import { useCart } from "../context/cartContext"; // Import Cart Context
import { useEffect, useState } from "react";
import { useCart } from "./cartContext";

export default function ShoppingCart() {
  const { updateCartCount } = useCart(); // Get updateCartCount function
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    setCartItem(cart ? JSON.parse(cart) : []);
  }, []);

  const handleRemoveItem = (index: number) => {
    const updatedCart = [...cartItem];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItem(updatedCart);
    updateCartCount(); // Update Cart Count in Navbar
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItem.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItem.map((item, index) => (
          <div key={index}>
            <p>{item.name} - ${item.price}</p>
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

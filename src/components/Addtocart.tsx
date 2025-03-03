import React, { useState } from 'react';
import Image from "next/image"
interface ProductProps {
  id: string;
  name: string;
  price: number;
  discountPercentage: number;
  image: string;
  description: string;
  stockLevel: number;
  category: string;
  shades?: string[]; // Optional shades
}

const AddToCartComponent: React.FC<ProductProps> = ({
  id,
  name,
  price,
  discountPercentage,
  image,
  description,
  stockLevel,
  category,
  shades = ["Light", "Dark", "Natural"], // Example shades
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedShade, setSelectedShade] = useState(shades[0]);
  
  const discountedPrice = price - (price * discountPercentage) / 100;

  const handleAddToCart = () => {
    const cartItem = {
      id,
      name,
      price: discountedPrice,
      quantity,
      selectedShade,
    };

    console.log("Added to cart:", cartItem);
    alert(`${name} has been added to your cart!`);
  };

  return (
    <div className="max-w-sm mx-auto p-4 border shadow-lg rounded-lg">
      <Image
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-md"
      />
      <h1 className="text-lg font-bold mt-4">{name}</h1>
      <p className="text-sm text-gray-600 my-2">{description}</p>
      <p className="text-sm font-medium text-gray-500">Category: {category}</p>
      <p className="text-sm font-medium text-gray-500">Stock: {stockLevel}</p>
      <div className="my-4">
        <p className="text-lg font-semibold text-green-600">
          Price: ${discountedPrice.toFixed(2)}{" "}
          <span className="line-through text-gray-400">${price.toFixed(2)}</span>
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="shade" className="block font-medium text-gray-700">
          Select Shade:
        </label>
        <select
          id="shade"
          value={selectedShade}
          onChange={(e) => setSelectedShade(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          {shades.map((shade, index) => (
            <option key={index} value={shade}>
              {shade}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block font-medium text-gray-700">
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Math.min(stockLevel, parseInt(e.target.value))))}
          className="w-full p-2 border rounded-md"
          min={1}
          max={stockLevel}
        />
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartComponent;
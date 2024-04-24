import React from "react";
import { usePoints } from "../hooks/PointsProvider"; // Ensure this import path is correct

export default function ShopItem({ name, cost, picturePath }) {
  const { points, addPoints, removePoints } = usePoints(); // Corrected destructuring

  // Function to handle the button click
  const handlePurchase = () => {
    if (points >= cost) {
      removePoints(cost);
      alert(`You have purchased ${name} for ${cost} points.`);
    } else {
      alert("You do not have enough points.");
    }
  };

  return (
    <div className="shop-item bg-white shadow-lg rounded-lg p-4 mt-4 mb-4">
      <img
        src={picturePath}
        alt={name}
        className="shop-item-image rounded-t-lg w-full"
        style={{ height: "200px", objectFit: "contain" }} // Changed to 'contain' to prevent cutting off image
      />
      <div className="p-4">
        <h2 className="shop-item-name text-xl font-bold">{name}</h2>
        <p className="shop-item-points text-gray-600">Cost: {cost} Points</p>
        <button
          onClick={handlePurchase}
          className={`mt-4 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300
            ${
              points >= cost
                ? "bg-blue-500 hover:bg-blue-700 text-white"
                : "bg-red-500 hover:bg-red-700 text-white"
            }`}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

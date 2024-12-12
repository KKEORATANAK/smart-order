import React from "react";

const Menu = () => {
  const menuItems = [
    {
      name: "Deep Fried Wonton",
      price: "$15.00",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Fried Rice with Pork",
      price: "$40.00",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Spicy Chicken Tendon",
      price: "$31.00",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="flex-1 p-4">
      <h2 className="text-lg font-semibold mb-4">Menu Items</h2>
      <div className="grid grid-cols-3 gap-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded mb-2"
            />
            <h3 className="text-sm font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.price}</p>
            <button className="bg-blue-600 text-white px-4 py-1 mt-2 rounded">
              Choose
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

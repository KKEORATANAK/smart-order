import React from "react";

const OrderSummary = () => {
  return (
    <div className="w-96 bg-white p-4 shadow-md rounded-md mt-4 mr-4 mb-4">
      <h2 className="text-lg font-bold mb-4">Order's Summary</h2>
      <div>
        <div className="flex justify-between mb-2">
          <span>Deep Fried Wonton</span>
          <span>$30.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Spicy Chicken Tendon</span>
          <span>$31.00</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span className="text-blue-500">$61.00</span>
        </div>
      </div>
      <button className="bg-blue-600 text-white w-full py-2 mt-4 rounded-full">
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;

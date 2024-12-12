import React from "react";

const SalesAnalytic = () => {
  const orders = [
    {
      id: "#219022",
      items: 4,
      status: "Ready to serve",
      color: "bg-green-100",
      textColor: "text-green-600",
      buttonColor: "bg-green-500",
    },
    {
      id: "#219021",
      items: 3,
      status: "In Progress",
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
      buttonColor: "bg-yellow-500",
    },
    {
      id: "#219020",
      items: 2,
      status: "In Progress",
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
      buttonColor: "bg-yellow-500",
    },
  ];

  return (
    <div className="rounded-md p-4 overflow-auto">
      <h2 className="text-lg font-semibold mb-4">Sales Analytic</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className={`p-4 rounded bg-white shadow hover:shadow-lg transition relative`}
          >
            {/* ID in the top-left corner */}
            <h3 className="absolute top-2 left-2 text-sm font-bold">
              {order.id}
            </h3>

            {/* Items count in the top-right corner */}
            <p className="absolute top-2 right-2 text-sm text-gray-600">
              {order.items} Items
            </p>

            {/* Status Button */}
            <div className="mt-8">
              {/* Status Button */}
              <button
                className={`flex items-center justify-between w-full px-4 py-2 rounded-full text-white font-semibold ${order.buttonColor} hover:opacity-90`}
              >
                <span>{order.status}</span>
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesAnalytic;

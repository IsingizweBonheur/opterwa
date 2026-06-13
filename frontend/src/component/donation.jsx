import { useState } from "react";

export default function DonationCard() {
  const [amount, setAmount] = useState("");

  const presetAmounts = [10, 25, 50];

  const handleDonate = () => {
    if (!amount) return alert("Please select or enter an amount");

    // TEMP ACTION (no backend yet)
    alert(`Thank you for your support of $${amount}`);

    // Later upgrade:
    // redirect to Stripe / backend checkout
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border p-6">

      {/* Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        💙 Support Our Mission
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        Your donation helps artisans gain skills, tools, and global market access.
      </p>

      {/* Preset amounts */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {presetAmounts.map((val) => (
          <button
            key={val}
            onClick={() => setAmount(val)}
            className={`py-2 rounded-lg border font-medium transition
              ${
                amount === val
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "hover:border-indigo-500 hover:text-indigo-600"
              }`}
          >
            ${val}
          </button>
        ))}
      </div>

      {/* Custom amount */}
      <input
        type="number"
        placeholder="Enter custom amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      {/* Impact text */}
      <div className="bg-gray-50 p-3 rounded-lg mb-4 text-xs text-gray-600">
        <p>💡 Example impact:</p>
        <ul className="mt-1 space-y-1">
          <li>$10 → Training materials for 1 artisan</li>
          <li>$25 → Digital skills session</li>
          <li>$50 → Full workshop support</li>
        </ul>
      </div>

      {/* Donate button */}
      <button
        onClick={handleDonate}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
      >
        Donate Now
      </button>

      {/* Trust line */}
      <p className="text-center text-xs text-gray-400 mt-4">
        ⭐ 100% goes toward community impact programs
      </p>
    </div>
  );
}
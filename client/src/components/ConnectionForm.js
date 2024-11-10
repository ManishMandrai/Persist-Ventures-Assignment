import React, { useState } from "react";

function ConnectionForm() {
  const [input, setInput] = useState({ offer: "", request: "" });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input); 
  };

  return (
    <form className="bg-white p-6 shadow-md rounded" onSubmit={handleSubmit}>
      <label className="block mb-4">
        <span className="text-gray-700">What you can offer</span>
        <input
          type="text"
          name="offer"
          value={input.offer}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 p-2 rounded"
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">What you're looking for</span>
        <input
          type="text"
          name="request"
          value={input.request}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 p-2 rounded"
          required
        />
      </label>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
}

export default ConnectionForm;

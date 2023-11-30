'use client';
import React, { useState } from 'react';

export default function NewItem({items, onAddItem}) {

  let [myItems, setMyItems] = useState(items);
  //variables and their setter functions
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();     
    const newItem = {
      name,
      quantity,
      category,
    };

    onAddItem(newItem);

    items = myItems;
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 max-w-sm w-full">
        <div className="mb-2">
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-mono text-slate-900"
          />
        </div>
        <div className="flex justify-between">
          <label>Quantity: </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            class="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-mono text-slate-900"
          />
        
          <label>Category: </label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-lg font-mono text-slate-900">
            <option value="" disabled="">Category</option>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="beverages">Beverages</option>
            <option value="dry goods">Dry Goods</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="others">Other</option>
          </select>
        </div>
        <button type="submit" class="w-full mt-4 py-2 px-4 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Submit</button>
      </form>
    </div>
  );
}


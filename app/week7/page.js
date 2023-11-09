"use client"
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas'; // Import the new MealIdeas component
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  // New event handler to clean up item name and update selectedItemName state
  const handleItemSelect = (selectedItem) => {
    // Clean up the item name by removing size and emoji
    const cleanedItemName = selectedItem.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
    setSelectedItemName(cleanedItemName);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="flex p-4 bg-slate-950">
      {/* NewItem and ItemList components grouped together */}
      <div className="w-1/2 pr-4">
        <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
        <NewItem items={items} onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      {/* MealIdeas component placed on the other side */}
      <div className="w-1/2 pl-4">
        {/* Pass selectedItemName as ingredient prop to MealIdeas */}
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}

"use client"
import React, { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { getItems } from '../_services/shopping-list-service'; 
import { addItem } from '../_services/shopping-list-service';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  // New event handler to clean up item name and update selectedItemName state
  const handleItemSelect = (selectedItem) => {
    // Clean up the item name by removing size and emoji
    const cleanedItemName = selectedItem.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
    setSelectedItemName(cleanedItemName);

  };

  const handleAddItem = async (newItem) => {
    try {
      // Call addItem to add the item to the shopping list
      const newItemId = await addItem(user.uid, newItem);

      // Set the id of the new item using the id returned from addItem
      const newItemWithId = { ...newItem, id: newItemId };

      // Update the state of items to include the new item
      setItems((prevItems) => [...prevItems, newItemWithId]);
    } catch (error) {
      console.error('Error adding item:', error);
      // Handle the error as needed
    }
  };

  async function loadItems(user) {
    try{
      const userItems = await getItems(user.uid);
      setItems(userItems);
    }
    catch (error) {
      console.error('Error loading items: ', error)
    }
  }
  
  useEffect(()=>{
    if(user){
      loadItems(user);
    }
  }, [user]);

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
        <MealIdeas ingredient={selectedItemName}/>
      </div>
    </div>
  );
}

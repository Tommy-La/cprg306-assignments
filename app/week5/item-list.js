"use client"
import Item from './item.js';
import React, { useState, useEffect } from 'react';
import items from './items.json';

export default function ItemList(){
  // sortBy constant and itemsList
  const [sortBy, setSortBy] = useState('name');
  const [itemsList, setItemsList] = useState(items);
  // useEffect keep track of sortBy to display list
  useEffect(()=>{
    if(sortBy === 'name'){
    const sortByName = [...itemsList].sort((a, b) => a.name.localeCompare(b.name));
    setItemsList(sortByName);
  } else if(sortBy === 'category'){
    const sortbyCategory = [...itemsList].sort((a, b) => a.category.localeCompare(b.category));
    setItemsList(sortbyCategory);
  } },[sortBy]);

  // sortItem use to change sortBy | Todo: change the button color
  const sortItem = (option)=>{
    setSortBy(option);
  }

  return (
    <div>
      Sort By
      <button className="bg-sky-700 p-1 m-2 w-28 rounded-lg border hover:bg-violet-700" onClick={() => sortItem('name')}>
        Name
      </button>
      <button className="bg-sky-700 p-1 m-2 w-28 rounded-lg border hover:bg-violet-700" onClick={() => sortItem('category')}>
        Category
      </button>
      <ul>
      {itemsList.map((mapItem) => (
          <Item key={mapItem.id} name={mapItem.name} quantity={mapItem.quantity} category={mapItem.category} />
        ))}
        </ul>
    </div>      
  );
}
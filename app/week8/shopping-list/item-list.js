"use client"
import Item from './item.js';
import React, { useState, useEffect } from 'react';

export default function ItemList({ items, onItemSelect }) {
  // sortBy constant and itemsList
  const [sortBy, setSortBy] = useState('name');
  const [itemsList, setItemsList] = useState(items);

  // useEffect keeps track of sortBy to display the list
  useEffect(() => {
    if (sortBy === 'name') {
      const sortByName = [...itemsList].sort((a, b) => a.name.localeCompare(b.name));
      setItemsList(sortByName);
    } else if (sortBy === 'category') {
      const sortByCategory = [...itemsList].sort((a, b) => a.category.localeCompare(b.category));
      setItemsList(sortByCategory);
    }
  }, [sortBy]);

  // sortItem function is used to change sortBy
  const sortItem = (option) => {
    setSortBy(option);
  };

  return (
    <div>
      Sort By
      <button className={`bg-sky-700 p-1 m-2 w-28 rounded-lg border hover:bg-violet-700 ${sortBy === 'name' && 'bg-violet-700'}`} onClick={() => sortItem('name')}>
        Name
      </button>
      <button className={`bg-sky-700 p-1 m-2 w-28 rounded-lg border hover:bg-violet-700 ${sortBy === 'category' && 'bg-violet-700'}`} onClick={() => sortItem('category')}>
        Category
      </button>
      <ul>
        {itemsList.map((mapItem) => (
          <Item
            key={mapItem.id}
            name={mapItem.name}
            quantity={mapItem.quantity}
            category={mapItem.category}
            onSelect={() => onItemSelect(mapItem)}
          />
        ))}
      </ul>
    </div>
  );
}

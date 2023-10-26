'use client';
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const handleAddItem = ()=>{
      setItems([...items]);
    }

    return (
    <main className="p-4 bg-slate-950">
      <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
      <NewItem items ={items} />
      <ItemList items={items}/>
    </main>
    );
}

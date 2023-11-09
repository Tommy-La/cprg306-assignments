// Display the item info using the info that was given
export default function Item({ id, name, quantity, category, onSelect }) {
    return (
      <li onClick={() => onSelect(id)} className="border p-4 mb-4 shadow-md max-w-sm bg-slate-900">
        <div className="font-bold">{name}</div>
        <div>Buy {quantity} in {category}</div>
      </li>
    );
  }
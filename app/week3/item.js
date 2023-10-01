
export default function Item({name, quantity, category}){
    return (
        <li className="border rounded-lg p-4 mb-4 shadow-md max-w-sm bg-slate-900">
            <div class="font-bold">{name}</div>
            <div>Buy {quantity} in {category}</div>
        </li>
    );
}

import ItemList from './item-list';

export default function Page() {
    return (
    <main className="p-4 bg-slate-950">
      <h1 className="text-3xl font-semibold mb-4">Shopping List</h1>
      <ItemList/>
    </main>
    );
}

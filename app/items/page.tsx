import { getItems } from "../data/item"

export default async function Page() {
  const items = await getItems();

  return (
    <div>
      <h1 className="font-bold text-2xl mb-6">item</h1>

      <div className="grid grid-cols-2 gap-2">
        {items?.map((item) => (
          <div key={item.id} className="border p-2 rounded-lg">
            <div className="aspect-video bg-muted border rounded-lg mb-2"></div>
            {item.name} / {item.amount.toLocaleString()}
          </div>
        ))}
      </div>
    </div>
  );
}

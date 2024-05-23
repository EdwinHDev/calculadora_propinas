import { IMenuItem } from "../types"
import { formatCurrency } from "../helpers";

interface Props {
  item: IMenuItem;
  addItem: (item: IMenuItem) => void
}

export default function MenuItem({ item, addItem }: Props) {
  return (
    <>
      <button
        className="border border-teal-300 rounded-lg hover:bg-teal-300 w-full p-2 flex justify-between transition-all"
        onClick={() => addItem( item )}
      >
        <p className="text-zinc-700">{ item.name }</p>
        <p className="font-black text-zinc-700">{ formatCurrency( item.price ) }</p>
      </button>
    </>
  )
}

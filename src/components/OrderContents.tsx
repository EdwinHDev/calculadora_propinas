import { formatCurrency } from "../helpers"
import { IMenuItem, IOrderItem } from "../types"

type Props = {
  orders: IOrderItem[];
  removeItem: (id: IMenuItem['id']) => void
}

export default function OrderContents({ orders, removeItem }: Props) {
  return (
    <div>
      <h2 className="font-black text-4xl text-zinc-700">Consumo</h2>

      <div className="space-y-3 mr-5 mt-10 divide-y divide-dashed">
        {
          orders.map(order => (
            <div
              key={ order.id }
              className="flex justify-between py-3 items-center"
            >
              <div>
                <p className="text-lg">{ order.name } - { formatCurrency( order.price ) }</p>
                <p className="font-black">Cantidad: { order.quantity } - { formatCurrency( order.price * order.quantity ) }</p>
              </div>
              <button
                className="relative group"
                onClick={() => removeItem(order.id)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="fill-red-500 hover:fill-red-600 relative z-10 active:scale-90 active:fill-red-700 transition-all">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="fill-red-500 absolute top-0 left-0 group-hover:animate-ping z-0">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" />
                </svg>
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { IOrderItem } from "../types";

interface Props {
  orders: IOrderItem[];
  tip: number;
  placeOrders: () => void;
}

export default function OrdersTotal({ orders, tip, placeOrders }: Props) {

  const subTotalAmount = useMemo(() => orders.reduce((total, item) => total + (item.quantity * item.price), 0), [orders])
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, orders])
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, orders])

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl text-zinc-700">Totales y Propinas</h2>
        <p className="text-zinc-700">
          Subtotal a pagar: {''}
          <span className="font-bold">{ formatCurrency( subTotalAmount ) }</span>
        </p>
        <p className="text-zinc-700">
          Propina: {''}
          <span className="font-bold">{ formatCurrency( tipAmount ) }</span>
        </p>
        <p className="text-zinc-700">
          Total a pagar: {''}
          <span className="font-bold">{ formatCurrency( totalAmount ) }</span>
        </p>
      </div>

      <button
        className="px-6 py-3 w-full rounded-xl bg-teal-500 text-white font-semibold disabled:opacity-50"
        disabled={totalAmount === 0 ? true : false}
        onClick={ placeOrders }
      >
        Guardar Orden
      </button>
    </>
  )
}

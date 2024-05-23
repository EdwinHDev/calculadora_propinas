import { useState } from "react"
import { IMenuItem, IOrderItem } from "../types"

export default function useOrder() {

  const [ orders, setOrders ] = useState<IOrderItem[]>([])
  const [ tip, setTip ] = useState(0)

  const addItem = (item: IMenuItem) => {
    const itemExist = orders.find(orderItem => orderItem.id === item.id)
    if(itemExist) {
      const updateOrder = orders.map(orderItem => orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
      setOrders(updateOrder)
    } else {
      const newItem = { ...item, quantity: 1}
      setOrders([...orders, newItem])
    }
    
  }

  const removeItem = (id: IMenuItem['id']) => {
    setOrders(orders.filter(order => order.id !== id))
  }

  const placeOrders = () => {
    setTimeout(() => {
      setOrders([])
      setTip(0)
    }, 3000);
  }

  return {
    orders,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrders
  }
}
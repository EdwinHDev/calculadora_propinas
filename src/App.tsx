import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrdersTotal from "./components/OrdersTotal"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { addItem, orders, removeItem, tip, setTip, placeOrders } = useOrder()

  return (
    <>
      <header className="bg-teal-500 py-5 px-4">
        <h1 className="text-center text-4xl font-black text-white">Calculadora de propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid grid-cols-1 md:grid-cols-2 px-4">
        <div className="p-5">
          <h2 className="text-4xl font-bold text-zinc-700">Menu</h2>

          <div className="space-y-2 mt-10">
            {
              menuItems.map(item => (
                <MenuItem
                  key={ item.id }
                  item={ item }
                  addItem={ addItem }
                />
              ))
            }
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {
            orders.length > 0 ? (
              <>
                <OrderContents
                  orders={ orders }
                  removeItem={ removeItem }
                />

                <TipPercentageForm
                  setTip={ setTip }
                  tip={ tip }
                />

                <OrdersTotal
                  orders={ orders }
                  tip={ tip }
                  placeOrders={ placeOrders }
                />
              </>
            ) : (
              <p className="text-center text-zinc-500">No hay ordenes</p>
            )
          }          
        </div>
      </main>
    </>
  )
}

export default App

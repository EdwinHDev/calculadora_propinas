import { Dispatch, SetStateAction } from "react";
import { tipOptions } from "../data/optionsPercentage";

interface Props {
  tip: number;
  setTip: Dispatch<SetStateAction<number>>;
}

export default function TipPercentageForm({ tip, setTip }: Props) {
  return (
    <div>
      <h3 className="text-zinc-700 font-black text-2xl">Propina</h3>

      <form className="mt-2">
        {
          tipOptions.map(tipOption => (
            <div
              key={ tipOption.id }
              className="flex gap-2 items-center"
            >
              <input
                id={ tipOption.id }
                type="radio"
                name="tip"
                value={ tipOption.value }
                onChange={(e) => setTip(+e.target.value)}
                checked={tipOption.value === tip}
              />
              <label htmlFor={ tipOption.id }>{ tipOption.label }</label>
            </div>
          ))
        }
      </form>
    </div>
  )
}

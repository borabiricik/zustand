import { useCounterStore } from "@store/counter";
import { useState } from "react";
import Button from "./subcomponents/Button";

const Counter = () => {
  const { count, increment, decrement, add } = useCounterStore();
  const [addValue, setaddValue] = useState<number>(0);
  return (
    <div className="flex flex-col items-center space-y-4 text-sm md:text-base">
      <h1 className="text-2xl font-bold">Count: {count}</h1>
      <div className="flex items-start space-x-2">
        <Button onClick={increment}>Increment</Button>
        <div className="flex flex-col items-center justify-start space-y-4">
          <input
            type="number"
            className="border px-4 py-1 rounded-lg"
            placeholder="Add by"
            value={addValue}
            min="0"
            onChange={(e) => setaddValue(parseInt(e.target.value))} // Not handling 'e' letter from number input. Ignore it
          />
          <Button onClick={() => add(addValue)}>Add</Button>
        </div>
        <Button onClick={decrement}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;

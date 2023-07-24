import { useState } from "react";
import { getRandomFruit } from "../utils/getRandomFruit";
import { Child1 } from "./Child1";

export const Parent = () => {
  const [fruitCounter, setFruitCounter] = useState(0);
  const [fruitType] = useState(getRandomFruit());

  return (
    <div className="frame violet parent">
      <h2 className="title">Parent</h2>
      <div className="fruit-counter">
        <p>
          {fruitType}: {fruitCounter}
        </p>
        <button onClick={() => setFruitCounter((counter) => counter + 1)}>
          +
        </button>
        <button onClick={() => setFruitCounter((counter) => counter - 1)}>
          -
        </button>
      </div>
      <Child1 fruitCounter={fruitCounter} fruitType={fruitType} />
    </div>
  );
};

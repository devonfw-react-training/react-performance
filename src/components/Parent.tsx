import { useState } from "react";
import { Child1 } from "./Child1";
import { Child2 } from "./Child2";
import { getRandomFruit } from "../utils/getRandomFruit";
import { ColorItem } from "./ColorItem";

export const Parent = () => {
  // states related to left section
  const [fruitCounter, setFruitCounter] = useState(0);
  const [fruitType] = useState(() => getRandomFruit());

  // states related to right section
  const [colors, setColors] = useState<string[]>([]);

  const addColor = (colorToAdd: string) => {
    setColors((c) => [...c, colorToAdd]);
  };

  const deleteColor = (colorToDelete: string) => {
    setColors((c) => c.filter((item) => item !== colorToDelete));
  };

  return (
    <div className="frame violet parent">
      <h2 className="title">Parent</h2>
      <section className="left-section">
        <p>
          {fruitType}: {fruitCounter}
        </p>
        <button onClick={() => setFruitCounter((counter) => counter + 1)}>
          +
        </button>
        <button onClick={() => setFruitCounter((counter) => counter - 1)}>
          -
        </button>
      </section>
      <section className="right-section">
        <ul>
          {colors.map((color) => (
            <ColorItem key={color} color={color} deleteColor={deleteColor} />
          ))}
        </ul>
      </section>
      <Child1 fruitCounter={fruitCounter} fruitType={fruitType} />
      <Child2 addColor={addColor} />
    </div>
  );
};

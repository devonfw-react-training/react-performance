import { useState } from "react";
import { Child1 } from "./Child1";
import { Child2 } from "./Child2";

export const Parent = () => {
  const [bananaCounter, setBananaCounter] = useState(0);
  return (
    <div className="frame violet">
      <p>Parent</p>
      <p>🍌: {bananaCounter}</p>
      <button onClick={() => setBananaCounter((counter) => counter + 1)}>
        +
      </button>
      <button onClick={() => setBananaCounter((counter) => counter - 1)}>
        -
      </button>
      <Child1 bananaCounter={bananaCounter} />
      <Child2 />
    </div>
  );
};

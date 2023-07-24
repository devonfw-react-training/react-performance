import { memo } from "react";
import { Grandchild } from "./Grandchild";

type IProps = {
  fruitCounter: number;
  fruitType: string;
};

export const Child1 = memo(({ fruitCounter, fruitType }: IProps) => {
  let fruits = "";
  for (let i = 0; i < fruitCounter; i++) {
    fruits = fruits + fruitType;
  }
  return (
    <div className="frame blue">
      <h2>Child 1</h2>
      <p>{fruits}</p>
      <Grandchild />
    </div>
  );
});

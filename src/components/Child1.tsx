import { Grandchild } from "./Grandchild";

type IProps = {
  bananaCounter: number;
};

export const Child1 = ({ bananaCounter }: IProps) => {
  let bananas = "";
  for (let i = 0; i < bananaCounter; i++) {
    bananas = bananas + "🍌";
  }
  return (
    <div className="frame blue">
      <p>Child 1</p>
      <p>{bananas}</p>
      <Grandchild />
    </div>
  );
};

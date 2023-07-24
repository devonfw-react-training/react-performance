import { ChangeEvent, SyntheticEvent, useState } from "react";

type IProps = {
  addColor: (colorToAdd: string) => void;
};

export const Child2 = ({ addColor }: IProps) => {
  const [newColor, setNewColor] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewColor(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addColor(newColor);
    setNewColor("");
  };

  return (
    <form className="frame blue" onSubmit={handleSubmit}>
      <h2>Child 2</h2>
      <label>
        Enter your favourite color:
        <input value={newColor} onChange={handleChange} className="input" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
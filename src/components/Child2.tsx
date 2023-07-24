import { ChangeEvent, SyntheticEvent } from "react";

type IProps = {
  newColor: string;
  setNewColor: React.Dispatch<React.SetStateAction<string>>;
  addColor: (colorToAdd: string) => void;
};

export const Child2 = ({ newColor, setNewColor, addColor }: IProps) => {
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

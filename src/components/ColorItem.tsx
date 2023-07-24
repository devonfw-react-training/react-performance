type IProps = {
  color: string;
  deleteColor: (colorToDelete: string) => void;
};

export const ColorItem = ({ color, deleteColor }: IProps) => {
  return (
    <li className="color-item" style={{ color }}>
      {color}{" "}
      <button
        onClick={() => {
          deleteColor(color);
        }}>
        ❌
      </button>
    </li>
  );
};

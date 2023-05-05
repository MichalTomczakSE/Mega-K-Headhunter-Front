import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "reset";
  color?: string;
  onClick?: () => void;
  variant?: string;
}

export const Button = ({
  children,
  type,
  color,
  onClick,
  variant,
}: ButtonProps) => {
  return (
    <button
      type={type ? type : "button"}
      //I suggest to remove the color property and add a variant
      className={`${color ? color : "bg-primary-red"} ${
        variant ? variant : "px-4 py-2 text-light-primary-text"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

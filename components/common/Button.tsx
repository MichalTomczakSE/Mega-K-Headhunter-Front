import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "reset";
  color?: string;
  onClick?: () => void;
  variant?: string;
  disabled?:boolean,
}

export const Button = ({
  children,
  type,
  color,
  onClick,
  variant,
  disabled
}: ButtonProps) => {
  return (
    <button
      type={type ? type : "button"}
      className={`${color ? color : "bg-primary-red"} ${
        variant ? variant : "px-4 py-2 text-light-primary-text"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
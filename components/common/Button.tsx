
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode,
  type?:"submit" | "reset",
  color?:string,
  onClick?:() => void,
  disabled?:boolean
}
export const Button = ({ children,type,color,onClick,disabled }: ButtonProps ) => {
  return (
    <button
      type={type?type:"button"}
      className={`${color?color:disabled?"bg-secondary-background":"bg-primary-red"} text-light-primary-text py-2 px-4`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

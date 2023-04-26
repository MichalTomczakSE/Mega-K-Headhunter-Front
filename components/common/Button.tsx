interface ButtonProps { 
children: string,
  type?:"submit" | "reset",
  color?:string,
  onClick?:() => void,
}
export const Button = ({ children,type,color,onClick }: ButtonProps ) => {
  return (
    <button
      type={type?type:"button"}
      className={`${color?color:"bg-primary-red"} text-light-primary-text py-2 px-4`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

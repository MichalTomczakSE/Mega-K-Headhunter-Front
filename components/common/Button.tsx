interface ButtonProps { 
children: string,
  type?:"submit" | "reset",
  color?:string|undefined,
}
export const Button = ({ children,type,color }: ButtonProps ) => {
  return (
    <button
      type={type?type:"button"}
      className={`${color?color:"bg-primary-red"} text-light-primary-text py-2 px-4`}
    >
      {children}
    </button>
  );
};

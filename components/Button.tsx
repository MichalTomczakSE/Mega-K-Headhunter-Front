export const Button = ({ children, onClick }) => {
  return (
    <button
      type={"submit"}
      className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"}
    >
      {children}
    </button>
  );
};

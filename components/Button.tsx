export const Button = ({ children }) => {
  return (
    <button
      type={"submit"}
      className={"bg-primary-red text-light-primary-text py-2 px-4"}
    >
      {children}
    </button>
  );
};

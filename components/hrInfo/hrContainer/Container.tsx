interface HrContainerProps {
  children: JSX.Element | JSX.Element[];
}

export const Container = ({ children }: HrContainerProps) => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      {children}
    </div>
  );
};

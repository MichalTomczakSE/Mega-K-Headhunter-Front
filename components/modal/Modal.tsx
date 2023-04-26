export const Modal = () => {

  return (
    <div
      role="modal"
      className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center "
      id="wrapper"
      >
      <div className="container max-w-lg flex flex-col">
        <div className="bg-filter-background p-2">
         Modal Message
        </div>
      </div>
    </div>
  );
};
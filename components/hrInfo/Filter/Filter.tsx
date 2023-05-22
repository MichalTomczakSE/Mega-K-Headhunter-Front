import { useState } from "react";
import { TbFilter } from "react-icons/tb";
import { Button } from "@/components/common/Button";
import { FilterForm } from "@/components/filter/FilterForm";

export const Filter = () => {
  const [showModal, setShowModal] = useState(false);
  const callback = (payload: boolean) => {
    setShowModal(payload);
  };
  return (
    <>
    <Button
      color={"bg-navbar-background"}
      variant={"relative w-[111px] pl-5 pr-2"}
      onClick={() => setShowModal(true)}
    >

      <TbFilter className="absolute left-0 text-xl" />
      Filtrowanie
    </Button>
      <section className='bg-primary-background h-[80vh]'>
        <FilterForm modalStatus={showModal} callback={callback}/>
      </section>
    </>
  );
};

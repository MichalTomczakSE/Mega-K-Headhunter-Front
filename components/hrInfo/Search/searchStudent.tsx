import { ChangeEvent } from "react";
import { SlMagnifier } from "react-icons/sl";

interface SearchProps {
  setSearch: (search: string) => void;
}

export const SearchStudent = ({ setSearch }: SearchProps) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  return (
    <form className="relative flex w-full items-center">
      <SlMagnifier className="absolute " />
      <input
        type="text"
        className=" w-25/100 bg-navbar-background pl-6"
        placeholder="szukaj"
        onChange={handleSearchChange}
      />
    </form>
  );
};

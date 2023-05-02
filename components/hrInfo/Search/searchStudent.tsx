import { ChangeEvent } from "react";
import {SlMagnifier} from "react-icons/sl";

	interface SearchProps {
		setSearch: (search: string) => void;
	}

export const SearchStudent = ({setSearch}: SearchProps) => {
	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.currentTarget.value);
	};

	return (
		<form className='w-full relative flex items-center' >
			<SlMagnifier className='absolute '/>
		<input
					 type="text"
					 className=' pl-6 bg-navbar-background w-25/100'
					 placeholder="szukaj"
					 onChange={handleSearchChange}
		/>
		</form>
	)
};


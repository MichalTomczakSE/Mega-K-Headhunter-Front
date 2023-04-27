import {KeyboardEvent, FormEvent, useContext, useState} from 'react';
import {SlMagnifier} from "react-icons/sl";

import {SearchContext} from "@/context/search.context";

export const SearchStudent = () => {
	const {search, setSearch} = useContext(SearchContext);
	const [inputVal, setInputVal] = useState(search);

	const setSearchFromLocalState = (e: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLInputElement>): void => {
		e.preventDefault();
		setSearch(inputVal);
	};

	function handleKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
		if (e.key === 'Enter') {
			setSearchFromLocalState(e);
			console.log(inputVal);
		}
	}

	return (
		<form className='w-full relative flex items-center' onSubmit={setSearchFromLocalState}>
			<SlMagnifier className='absolute '/>
			<input className=' pl-6 bg-navbar-background text-base w-25/100' type="text" value={inputVal}
						 onKeyDown={handleKeyDown} placeholder="szukaj" onChange={e => setInputVal(e.target.value)}/>
		</form>
	);
};

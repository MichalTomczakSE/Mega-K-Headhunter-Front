import {TbFilter} from "react-icons/tb";

export const BtnFilter = () => {
	const handleClick = () => {
		console.log("handleClick")

	}
	return <button className=" pl-2 bg-navbar-background w-[111px]" onClick={handleClick}><TbFilter
		className='absolute text-xl '/>filtruj
	</button>
};

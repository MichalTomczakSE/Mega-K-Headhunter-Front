import {useState} from 'react';
import {TbFilter} from "react-icons/tb";

import { Button} from "@/components/common/Button"

export const Filter = () => {

const [showModal, setShowModal] = useState<boolean>(false)
	return (
	<Button color={"bg-navbar-background"} variant={"relative w-[111px] pl-5 pr-2"} onClick={()=>setShowModal(true)}><TbFilter
		className='absolute left-0 text-xl'/>
		Filtrowanie
	</Button>
	)
};

import Link from "next/link";

export const LinkHrComponent = () => {
	return (
		<div>
			<ul className='flex gap-x-14 '>
				<li>
					<Link className='focus:border-b-secondary-red   focus:border-b-[3px]' href="/dashboard/hr/available-students">Dostępni
						kursanci</Link>
				</li>
				<li>
					<Link className=' focus:border-b-secondary-red   focus:border-b-[3px]' href="/dashboard/hr/to-talk">Do
						rozmowy</Link>
				</li>
			</ul>
		</div>
	)
};


import Link from "next/link";
import { useRouter } from 'next/router';

export const LinkComponent = () => {
	const router = useRouter();
	return (
		<div>
			<ul className='flex gap-x-14 '>
				<li>
					<Link className={router.asPath =="/dashboard/hr/available-students" ? 'border-b-[3px] border-b-secondary-red' : ''  }
						  href="/dashboard/hr/available-students">Dostępni
						kursanci</Link>
				</li>
				<li>
					<Link className={router.asPath =="/dashboard/hr/to-talk" ? 'border-b-[3px] border-b-secondary-red' : ''  } href="/dashboard/hr/to-talk">Do
						rozmowy</Link>
				</li>
			</ul>
		</div>
	)
};


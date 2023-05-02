import { render, screen } from '@testing-library/react';
import Link from "next/link";

import { LinkComponent } from '@/components/hrInfo/linkHr/linkComponent';

describe('Link component', () => {
	it('renders links', () => {
		render(<LinkComponent />);
		const links = screen.getAllByRole("link");
		expect(links).toHaveLength(2);
	});

	it ('renders correct text context', () => {
		const textContent = "Do rozmowy";
		render(<Link href="/dashboard/hr/to-talk">{textContent}</Link>)
});

	it ('renders correct text context', () => {
		const textContent = "Dostępni kursanci";
		render(<Link href="/dashboard/hr/available-students">{textContent}</Link>)
	});
});
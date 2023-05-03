import { render} from '@testing-library/react';
import '@testing-library/jest-dom';

import { Filter } from "./Filter";

describe("Button component", () => {
	it('should render the "Filtrowanie" text', () => {
		const { getByText } = render(<Filter />);

		expect(getByText('Filtrowanie')).toBeInTheDocument();
	});

	it('should render icon', () => {
		const { container } = render(<Filter />);

		expect(container.querySelector('svg')).toBeTruthy();
	});
});

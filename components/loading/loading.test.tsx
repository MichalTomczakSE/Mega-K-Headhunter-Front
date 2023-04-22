import { render, screen } from '@testing-library/react';

import { Loading } from '@/components/loading/loading';

describe('Loading component', () => {
	it('renders a loading', () => {
		render(<Loading />);
		const loadingIcon = screen.getByRole("status");
		expect(loadingIcon).toBeDefined();
	});

});
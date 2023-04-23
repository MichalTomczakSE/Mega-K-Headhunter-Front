import { render, screen } from '@testing-library/react';

import { Loader } from '@/components/common/loader/loader';

describe('Loader component', () => {
	it('renders a loader', () => {
		render(<Loader />);
		const loadingIcon = screen.getByRole("status");
		expect(loadingIcon).toBeDefined();
	});

});
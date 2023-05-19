import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Container }  from '@/components/common/container/Container';

describe('Container', () => {
	it('should be render children', () => {
		const child1 = <p>child1</p>
		const child2 = <p>child2</p>
		render(
			<Container>
				{child1}
				{child2}
			</Container>
		);

		expect(screen.getByText('child1')).toBeInTheDocument();
		expect(screen.getByText('child2')).toBeInTheDocument();
	});
});
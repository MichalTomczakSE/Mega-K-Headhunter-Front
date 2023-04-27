import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { HrContainer }  from '@/components/hrInfo/hrContainer/hrContainer';

describe('hrContainer', () => {
	it('should be render children', () => {
		const child1 = <p>child1</p>
		const child2 = <p>child2</p>
		render(
			<HrContainer>
				{child1}
				{child2}
			</HrContainer>
		);

		expect(screen.getByText('child1')).toBeInTheDocument();
		expect(screen.getByText('child2')).toBeInTheDocument();
	});
});
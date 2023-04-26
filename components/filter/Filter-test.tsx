import { render, screen } from '@testing-library/react';

import { Filter } from '@/components/common/filter/Filter';

describe('Filter component', () => {
  it('renders a filter component in modal', () => {
    render(<Filter />);
    const filterWindow = screen.getByRole("filter");
    expect(filterWindow).toBeDefined();
  });

});
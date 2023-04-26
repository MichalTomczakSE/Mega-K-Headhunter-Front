import { render, screen } from '@testing-library/react';

import { Modal } from '@/components/modal/Modal';

describe('Modal component', () => {
  it('renders a Modal', () => {
    render(<Modal />);
    const modalWindow = screen.getByRole("modal");
    expect(modalWindow).toBeDefined();
  });

});
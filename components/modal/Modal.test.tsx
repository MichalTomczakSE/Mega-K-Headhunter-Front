import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  const handleClose = jest.fn();

  it('should render nothing when isOpen is false', () => {
    const { queryByRole } = render(
      <Modal isOpen={false} onClose={handleClose}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );
    expect(queryByRole('modal')).toBeNull();
  });

  it('should render the modal content when isOpen is true', () => {
    const { getByRole, getByTestId } = render(
      <Modal isOpen={true} onClose={handleClose}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );
    const modalWrapper = getByRole('modal');
    expect(modalWrapper).toBeInTheDocument();
    expect(modalWrapper).toHaveAttribute('id', 'wrapper');
    expect(getByTestId('modal-content')).toHaveTextContent('Modal Content');
  });

  it('should close the modal when the background is clicked', () => {
    const { getByRole } = render(
      <Modal isOpen={true} onClose={handleClose}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );
    const modalWrapper = getByRole('modal');
    fireEvent.click(modalWrapper);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should not close the modal when the modal content is clicked', () => {
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={handleClose}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );
    const modalContent = getByTestId('modal-content');
    fireEvent.click(modalContent);
    expect(handleClose).toHaveBeenCalledTimes(0);
  });
});
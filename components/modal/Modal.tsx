import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    target.id === 'wrapper' ? onClose() : null;
  };
  return (
    <div
      role='modal'
      className='fixed inset-0 bg-filter-background bg-opacity-25 flex justify-center items-center'
      id='wrapper'
      onClick={handleClose}>
      <div className='container max-w-lg flex flex-col'>
        <div className='bg-filter-background p-2'>
          {children}
        </div>
      </div>
    </div>

  );
};




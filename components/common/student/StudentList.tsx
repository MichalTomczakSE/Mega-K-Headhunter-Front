import { ReactNode } from 'react';

interface StudentListProps {
  children: ReactNode;
}

export const StudentListElement = ({ children }: StudentListProps) => {
  return (
    <li>
      {children}
    </li>
  );
};
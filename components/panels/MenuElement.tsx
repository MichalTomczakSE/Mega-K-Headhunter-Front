import Link from 'next/link';
import { ReactNode } from 'react';

interface ListItemProps {
  children: ReactNode;
  urlAddress: string;
}

export const ListItem = ({ children, urlAddress }: ListItemProps) => {
  return (
    <li className='py-3.5'>
      <Link href={urlAddress}>
        {children}
      </Link>
    </li>
  );
};

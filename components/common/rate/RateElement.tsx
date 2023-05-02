import { ReactNode } from 'react';

interface RateElementProps {
  children: ReactNode;
  title: string;
}

export const RateElementWithNumber = ({ children, title }: RateElementProps) => {
  return (
    <li
      className='flex flex-col px-5 py-2 border-b-2 xl:border-b-0  sm:border-r-2 border-secondary-background sm:last:border-r-0 lg:last:border-r-2'>
      <div className='text-xs flex-grow'>
        {title}
      </div>
      <div className='py-4 font-bold text-[15px]'>
        {children}
        <p
          className='inline text-grades-text text-[15px]'> / 5</p>
      </div>
    </li>
  );
};

export const RateElementWithText = ({ children, title }: RateElementProps) => {
  return (
    <li
      className='flex flex-col px-5 py-2 border-b-2 xl:border-b-0 sm:border-r-2 border-secondary-background sm:even:border-r-0 lg:even:border-r-2 last:border-r-0'>
      <h3 className='text-xs flex-grow'>
        {title}
      </h3>
      <div className='py-4 font-bold text-[15px]'>
      {children}
      </div>
    </li>
  );
};

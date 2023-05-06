import { SidebarMenu } from '@/components/panels/SidebarMenu';
import { ReactNode } from 'react';

interface AccountDashboardProps {
  children: ReactNode;
}

export const AccountDashboard = ({ children }: AccountDashboardProps) => {
  return (
    <div
      className='
      flex flex-col
      sm:grid grid-cols-3 gap-4
      w-3/4 mx-auto py-4'>
      <div
        className='flex justify-center border
         md:justify-start md:px-3
         text-sm md:text-md'>
        <SidebarMenu isAdmin={true} />
      </div>
      <div
        className='border col-span-2 text-sm md:text-lg'>
        {children}
      </div>
    </div>
  );
};
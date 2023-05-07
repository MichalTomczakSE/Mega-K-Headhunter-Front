import { ListItem } from '@/components/panels/MenuElement';
import {
  AccountInfoIcon,
  AppointmentStudentsIcon,
  DeleteAccountIcon,
  EmployedIcon,
  PasswordIcon,
  UsersIcon,
} from '@/components/icons/SVGIcons';

interface SidebarMenuProps {
  isAdmin: boolean;
}

export const SidebarMenu = ({ isAdmin }: SidebarMenuProps) => {
  return (

    <ul
    className=''>
      <ListItem urlAddress='/'>
        <div className='flex items-center'>
          <AccountInfoIcon height={16} width={16} />
          <p className='px-1'>
            Twoje dane
          </p>
        </div>
      </ListItem>
      {isAdmin &&
        <>
          <ListItem urlAddress='/'>
            <div className='flex items-center'>
              <UsersIcon height={16} width={16} />
              <p className='px-1'>
                Dodaj użytkowników
              </p>
            </div>
          </ListItem>
          <ListItem urlAddress='/'>
            <div className='flex items-center'>
              <EmployedIcon height={16} width={16} />
              <p className='px-1'>
                Zatrudnieni studenci
              </p>
            </div>
          </ListItem>
        </>
      }
      {!isAdmin &&
        <>
          <ListItem urlAddress='/'>
            <div className='flex items-center'>
              <AppointmentStudentsIcon height={16} width={16} />
              <p className='px-1'>
                Do rozmowy
              </p>
            </div>
          </ListItem>
          <ListItem urlAddress='/'>
            <div className='flex items-center'>
              <DeleteAccountIcon height={16} width={16} />
              <p className='px-1'>
                Usuń konto
              </p>
            </div>
          </ListItem>
        </>
      }
      <ListItem urlAddress='/'>
        <div className='flex items-center'>
          <PasswordIcon height={16} width={16} />
          <p className='px-1'>
            Zmień hasło
          </p>
        </div>
      </ListItem>
    </ul>
  );
};
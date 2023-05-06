import { Header } from '@/components/common/Header';
import { AccountDashboard } from '@/components/panels/AccountDashboard';
import { ResetPassword } from '@/components/PasswordForms/ResetPassword';

export default function TestPage() {

  return (
    <>
      <Header />
      <AccountDashboard>
        <ResetPassword />
      </AccountDashboard>
    </>
  );
}
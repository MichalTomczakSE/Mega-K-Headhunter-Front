import { useState } from 'react';
import { Header } from '@/components/common/Header';
import { FilterForm } from '@/components/filter/FilterForm';
import { Button } from '@/components/common/Button';

export default function TestPage() {
  const [showModal, setShowModal] = useState(false);
  const callback = (payload: boolean) => {
    setShowModal(payload);
  };
  return (
    <>
      <Header />
      <Button
        onClick={() => setShowModal(true)}>
        Run Filter Form, Run!
      </Button>
      <section className='bg-primary-background h-[100vh]'>
        <FilterForm modalStatus={showModal} callback={callback}/>
      </section>
    </>
  );
}
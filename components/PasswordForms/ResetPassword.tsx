import { Button } from '@/components/common/Button';

export const ResetPassword = () => {

  return (
    <form
      className='flex flex-col items-center'>
      <div
        className='py-1'>
        <label htmlFor='password'>Aktualne hasło
          <div>
            <input
              className='text-black'
              type='password'
              name='password'
            />
          </div>
        </label>
      </div>
      <div
        className='py-1'>
        <label htmlFor='password'>Nowe hasło
          <div>
            <input
              className='text-black'
              type='password'
              name='password'
            />
          </div>
        </label>
      </div>
      <div
        className='py-1'>
        <label htmlFor='confirmPassword'>Potwierdź nowe hasło
          <div>
            <input
              className='text-black'
              type='password'
              name='confirmPassword'
            />
          </div>
        </label>
      </div>
      <div
        className='py-2'>
        <Button type='submit'>Zmień hasło!</Button>
      </div>
    </form>
  );
};
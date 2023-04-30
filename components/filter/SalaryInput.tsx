import { ChangeEvent, useEffect, useState } from 'react';

interface InputFormProps {
  filterTitle: string;
  onInputChange: (inputValues: { min: string; max: string }) => void;
  onReset: boolean;
}

export const SalaryInput = ({ onInputChange, filterTitle, onReset }: InputFormProps) => {
  const [inputValues, setInputValues] = useState({ min: '', max: '' });

  useEffect(() => {
    if (onReset) {
      resetInputs();
    }
  }, [onReset]);

  const resetInputs = () => {
    setInputValues({ min: '', max: '' });
  }
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, inputName: string) => {
    const newInputValues = { ...inputValues, [inputName]: event.target.value };
    setInputValues(newInputValues);
    onInputChange(newInputValues);
  };

  return (
    <>
      <p
        className='text-sm'>
        {filterTitle}
      </p>
      <div
        className='flex mb-3'>
        <div className='flex flex-col w-3/4 sm:flex-row mr-2 my-2'>
          <input
            type='number'
            value={inputValues.min}
            min={0}
            onChange={(event) => handleInputChange(event, 'min')}
            className='mr-2 mb-2 sm:mb-0 px-3 py-2 text-xs bg-secondary-background'
            placeholder='np. 1000zł'
          />
          <input
            type='number'
            min={inputValues.min}
            value={inputValues.max}
            onChange={(event) => handleInputChange(event, 'max')}
            className='mr-2 px-3 py-2 text-xs bg-secondary-background'
            placeholder='np. 10000zł'
          />
        </div>
      </div>
    </>

  );
};

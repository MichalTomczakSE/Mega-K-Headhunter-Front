import React, { useEffect, useState } from 'react';

interface ExperienceInputProps {
  filterTitle: string;
  onValueChange: (value: number) => void;
}

export const ExperienceInput = ({ filterTitle, onValueChange }: ExperienceInputProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    onValueChange(value);
  }, [value,onValueChange]);

  const increment = () => {
    setValue((prevValue) => {
      const newValue = prevValue + 1;
      onValueChange(newValue);
      return newValue;
    });
  };

  const decrement = () => {
    setValue((prevValue) => {
      const newValue = Math.max(0, prevValue - 1);
      onValueChange(newValue);
      return newValue;
    });
  };

  const displayValue = `${value} 
  ${value === 0  || value > 4 ? 'miesięcy' : value == 1 ? 'miesiąc' : 'miesiące'}`;

  return (
    <>
      <p className="text-sm">{filterTitle}</p>
      <div className="flex mb-3 text-dark-primary-text relative inline-block w-full">
        <div className='flex mr-2 my-2'>
        <input
          type="text"
          value={displayValue}
          readOnly
          className="pl-4 py-1 text-xs bg-secondary-background max-[320px]:w-24 max-[375px]:w-3/4 max-[425px]:w-36 w-48"
        />
        <div className="absolute right-20 -left-8 top-0 bottom-0 flex flex-col items-center justify-center mr-1">
          <button onClick={increment} className="text-[8px] px-0.5">▲</button>
          <button onClick={decrement} className="text-[8px] px-0.5">▼</button>
        </div>
      </div>
      </div>
    </>
  );
};
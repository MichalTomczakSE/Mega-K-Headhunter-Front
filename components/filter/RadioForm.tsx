import React, { ChangeEvent, useEffect, useState } from 'react';

interface RadioFormProps {
  filterTitle: string;
  onRadioChange: (selectedRadio: string) => void;
  onReset: boolean;
  radioOptions: string[];
  initialValue: string;
}

export const RadioForm = ({
                            filterTitle,
                            onRadioChange,
                            onReset,
                            radioOptions,
                            initialValue,
                          }: RadioFormProps) => {
  const [selectedRadio, setSelectedRadio] = useState<string>(initialValue);

  useEffect(() => {
    if (onReset) {
      setSelectedRadio(initialValue);
    }
  }, [onReset,initialValue]);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value);
    onRadioChange(event.target.value);
  };

  return (
    <>
      <p className="text-sm">{filterTitle}</p>
      <div className="flex flex-col my-2">
        {radioOptions.map((option, index) => (
          <label key={index} className="flex items-center mr-4">
          <span className="relative inline-block w-4 h-4 mr-2 align-middle select-none">
            <input
              type="radio"
              name={filterTitle}
              value={option}
              checked={selectedRadio === option}
              onChange={handleRadioChange}
              className="absolute w-4 h-4 opacity-0 cursor-pointer"
            />
            <span
              className={`${
                selectedRadio === option ? 'bg-primary-red' : 'bg-black'
              } cursor-pointer absolute top-0 left-0 w-4 h-4 border-2 border-primary-background rounded-full transition duration-200`}
            ></span>
          </span>
            {option}
          </label>
        ))}
      </div>
    </>
  );
};
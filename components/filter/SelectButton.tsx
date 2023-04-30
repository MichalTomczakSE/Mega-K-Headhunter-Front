import { useEffect, useRef, useState } from 'react';

interface SelectButtonProps {
  filterTitle: string;
  buttons: string[];
  multipleChoice: boolean;
  onSelectClick: (selectedButtons: number[]) => void;
  onReset: boolean;

}

export const SelectButton = ({ filterTitle, buttons, multipleChoice, onSelectClick, onReset }: SelectButtonProps) => {
  const [selectedButtons, setSelectedButtons] = useState<number[]>([]);

  useEffect(() => {
    onSelectClick(selectedButtons);
  }, [selectedButtons]);

  useEffect(() => {
    if (onReset) {
      setSelectedButtons([]);
    }
  }, [onReset]);

  const handleButtonClick = (buttonIndex: number) => {
    if (multipleChoice) {
      setSelectedButtons((prevSelectedButtons) => {
        const newSelectedButtons = [...prevSelectedButtons];
        const index = newSelectedButtons.indexOf(buttonIndex);
        if (index > -1) {
          newSelectedButtons.splice(index, 1);
        } else {
          newSelectedButtons.push(buttonIndex);
        }
        return newSelectedButtons;
      });
    } else {
      setSelectedButtons((prevSelectedButtons) => {
        const isButtonSelected = prevSelectedButtons.includes(buttonIndex);
        if (isButtonSelected) {
          return [];
        } else {
          return [buttonIndex];
        }
      });
    }
  };
  return (
    <>
      <p
        className='text-sm'>
        {filterTitle}
      </p>
      <div className='flex mr-2 my-2'>
        <div
          className='flex mb-3'>
          {buttons.map((buttonContent, index) => (
            <button
              onClick={() => handleButtonClick(index)}
              key={index}
              className={`mr-2 px-3 py-1.5 text-xs ${
                selectedButtons.includes(index) ? 'bg-primary-red' : 'bg-secondary-background'
              }`}
            >
              {buttonContent}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

import { render, screen,  fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Pagination } from './Pagination';


test('clicking the pagination buttons calls setPage() with the correct page number', () => {
  const setLimit = jest.fn();
  const setPage = jest.fn();

  const { getByText } = render(
    <Pagination
      total={100}
      limit={25}
      setLimit={setLimit}
      page={1}
      setPage={setPage}
    />
  );

  const previousButton = getByText('<');
  const nextButton = getByText('>');


  fireEvent.click(previousButton);
  expect(setPage).toHaveBeenCalledWith(0);

  fireEvent.click(nextButton);
  expect(setPage).toHaveBeenCalledWith(2);
});

test('should be render "Ilość elementów" text', () => {
  render(
    <Pagination
      total={100}
      limit={25}
      setLimit={()=> {}}
      page={1}
      setPage={()=> {}}
    />
  );
  const pElement = screen.getByText(/Ilość elementów/i)
  expect(pElement).toBeInTheDocument();
})

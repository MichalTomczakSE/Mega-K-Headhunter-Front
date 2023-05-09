import { render, fireEvent } from '@testing-library/react';
import { SearchStudent } from './searchStudent';

test('should be updated search value', () => {
  const setSearch = jest.fn();

  const { getByPlaceholderText } = render(<SearchStudent setSearch={setSearch} />);
  const searchInput = getByPlaceholderText('Szukaj');
  fireEvent.change(searchInput, {target: {value: "Warszawa"}})
  expect(setSearch).toHaveBeenCalledWith("Warszawa")
});
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StudentListElement } from '@/components/common/student/StudentList';

describe('StudentListItem', () => {
  it('should render children in <li> element', () => {
    render(
      <StudentListElement>
        Hello World!
      </StudentListElement>
    );
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(1);
    listItems.forEach((item, ) => {
      expect(item).toHaveTextContent('Hello World!');
    });
  });
});
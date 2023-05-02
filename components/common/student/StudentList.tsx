import { ReactNode, useState } from 'react';
import { studentMock } from '@/components/common/student/StudentMock';
import { Button } from '@/components/common/Button';

interface StudentListProps {
}

const StudentListElement = () => {
  const [expandedStudentId, setExpandedStudentId] = useState<string | null>(null);

  const handleExpandClick = (id: string) => {
    if (expandedStudentId === id) {
      setExpandedStudentId(null);
    } else {
      setExpandedStudentId(id);
    }
  };
  return (
    <>
      {studentMock.map((student) => (
        <li
          className='text-lg px-4 py-5'
          key={student.id}>
          <div
            className='flex justify-between'>
            <div>
              {student.firstName} {student.lastName.slice(0, 1)}.
            </div>
            <div
              className='flex items-center '>
              <Button>
                Zarezerwuj rozmowę
              </Button>
              <div
                className='ml-5'
                onClick={() => handleExpandClick(student.id)}
              >
                <svg
                  className={`transition-transform duration-500 ${
                    expandedStudentId === student.id ? 'transform rotate-180' : ''
                  }`}
                  xmlns='http://www.w3.org/2000/svg'
                  width='30' height='30'
                  viewBox='0 0 30 30'>
                  <g id='Group_29'
                     data-name='Group 29'
                     transform='translate(-268 -345)'>
                    <rect id='Rectangle_13'
                          data-name='Rectangle 13'
                          width='30'
                          height='30'
                          transform='translate(268 345)'
                          fill='#f7f7f7'
                          opacity='0' />
                    <path
                      id='arrow-65'
                      d='M0,14.135l2.24,2.24L9.5,8.982l7.257,7.393L19,14.135,9.5,4.5Z'
                      transform='translate(273 349.563)'
                      fill='#666' />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div>
          </div>
        </li>
      ))}
    </>
  );
};
export const StudentList = () => {


  return (
    <ul>
      <StudentListElement />
    </ul>
  );
};


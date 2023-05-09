import { useState } from 'react';
import Link from 'next/link';
import { studentMock } from '@/components/common/student/StudentMock';
import { Button } from '@/components/common/Button';
import { RatingTable } from '@/components/common/rate/RatingTable';

interface StudentListProps {
  status: number;
}

const StudentListElement = ({ status }: StudentListProps) => {
  const [expandedStudentId, setExpandedStudentId] = useState<string | null>(null);

  const handleExpandClick = (id: string) => {
    if (expandedStudentId === id) {
      setExpandedStudentId(null);
    } else {
      setExpandedStudentId(id);
    }
  };
  return (
    <div
      className='border-b-filter-background'>
      {studentMock.map((student) => (
        (student.status === status) &&
        <div
          className='border-b-[15px] lg:px-4 border-navbar-background bg-secondary-background'
          key={student.firstName + student.id}>
          <li
            key={student.id}
            className='text-xs sm:text-lg px-4 py-5 '
          >
            <div
              className='flex items-center justify-between'>
              <div className='grid sm:flex justify-center ml-2 flex items-center gap-3'>
                {status == 2 &&
                  (<>
                      <div className='text-xs'>
                        <p>Rezerwacja do</p>
                        <p className='text-xs sm:text-sm font-bold'>11.07.2022 r.</p>
                      </div>

                    </>
                  )}
                {status == 2 &&
                  <svg xmlns='http://www.w3.org/2000/svg' width='45' height='45' viewBox='0 0 45 45'>
                    <g id='Group_2708' data-name='Group 2708' transform='translate(-176 -553)'>
                      <circle id='Ellipse_3' data-name='Ellipse 3' cx='22.5' cy='22.5' r='22.5'
                              transform='translate(176 553)' fill='#7e7e7e' />
                      <circle id='Ellipse_4' data-name='Ellipse 4' cx='7' cy='7' r='7' transform='translate(192 564)'
                              fill='#666' />
                      <path id='Intersection_1' data-name='Intersection 1'
                            d='M0,12.027C1.263,5.2,7.679,0,15.4,0s14.14,5.2,15.4,12.027A22.36,22.36,0,0,1,15.4,18.15,22.36,22.36,0,0,1,0,12.027Z'
                            transform='translate(183 579.721)' fill='#666' />
                    </g>
                  </svg>
                }
                {student.firstName} {status == 1 ? student.lastName.slice(0, 1) + '.' : student.lastName}
              </div>

              <div
                className='flex items-center text-sm scale-75 sm:scale-100'>
                {status == 1 ? (
                    <Button>
                      Zarezerwuj rozmowę
                    </Button>
                  ) :
                  <div className='items-center text-xs  md:scale-100 lg:text-sm grid grid-cols-1 md:flex'>
                    <Button
                      variant='mx-0.5 sm:mx-3 my-2'>
                      <Link href={`/student/${student.id}`}>Pokaż CV</Link>
                    </Button>
                    <Button
                      variant='mx-0.5 sm:mx-3 my-2'
                      onClick={() => console.log('zmien status na dostepny')}>
                      Brak zainteresowania
                    </Button>
                    <Button
                        variant='mx-0.5 sm:mx-3 my-2'
                      onClick={() => console.log('zmien status na dostepny')}>

                      Zatrudniony
                    </Button>
                  </div>
                }

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
          </li>
          <div
            className={`overflow-hidden ${
              expandedStudentId == student.id
                ? 'max-h-[1000px] duration-1000 ease-in-out delay-100'
                : 'max-h-[0px] duration-300 ease-in-out'
            } `}
          >
            <RatingTable courseCompletion={student.grades.courseCompletion}
                         courseEngagement={student.grades.courseEngagement}
                         projectDegree={student.grades.projectDegree}
                         teamProjectDegree={student.grades.teamProjectDegree}
                         expectedTypeWork={student.expectedTypeWork}
                         targetWorkCity={student.targetWorkCity}
                         expectedSalary={student.expectedSalary}
                         expectedContractType={student.expectedContractType}
                         canTakeApprenticeship={student.canTakeApprenticeship}
                         monthsOfCommercialExp={student.monthsOfCommercialExp}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export const StudentList = ({ status }: StudentListProps) => {
  return (
    <ul>
      <StudentListElement status={status} />
    </ul>
  );
};


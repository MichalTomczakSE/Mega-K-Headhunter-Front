import { useState } from 'react';
import { studentMock } from '@/components/common/student/StudentMock';
import { Button } from '@/components/common/Button';
import { RatingTable } from '@/components/common/rate/RatingTable';


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
    <div
      className='border-b-filter-background'>
      {studentMock.map((student) => (
        <div
          className='border-b-[15px] lg:px-4 border-navbar-background bg-secondary-background'
          key={student.firstName + student.id}>
          <li
            key={student.id}
            className='text-sm sm:text-lg px-4 py-5 '
          >
            <div
              className='flex items-center justify-between'>
              <div
                className='ml-2'>
                {student.firstName} {student.lastName.slice(0, 1)}.
              </div>
              <div
                className='flex items-center text-sm scale-75 sm:scale-100'>
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
export const StudentList = () => {
  return (
    <ul>
      <StudentListElement />
    </ul>
  );
};


import { InfoList } from './infoList';
import { UserInfoInterface } from '@/interfaces/user/userInterfaces';
import { RatingForUser } from '@/components/common/rate/RatingTable';
import { studentMock } from '@/components/common/student/StudentMock';

interface PropsInterface {
  data: UserInfoInterface;
}

const student = studentMock[0];

export const UserInfo = ({ data }: PropsInterface) => {
  return (
    <>
      <div>
        <RatingForUser courseCompletion={student.grades.courseCompletion}
                       courseEngagement={student.grades.courseEngagement}
                       projectDegree={student.grades.projectDegree}
                       teamProjectDegree={student.grades.teamProjectDegree}
                       expectedTypeWork={student.expectedTypeWork}
                       targetWorkCity={student.targetWorkCity}
                       expectedSalary={student.expectedSalary}
                       expectedContractType={student.expectedContractType}
                       canTakeApprenticeship={student.canTakeApprenticeship}
                       monthsOfCommercialExp={student.monthsOfCommercialExp} />

      <InfoList data={data} />
      </div>
    </>
  );
};
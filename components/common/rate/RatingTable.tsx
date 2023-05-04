import { StudentDegreesEntity, StudentEntity } from '@/types';
import {
  RateElementWithNumber,
  RateElementWithText,
} from '@/components/common/rate/RateElement';

enum contractType {
  'Umowa o pracę' = 1,
  'B2B',
  'Umowa zlecenie',
  'Umowa o dzieło'
}

type StudentPreferences = Pick<StudentEntity,
  'expectedTypeWork' |
  'targetWorkCity' |
  'expectedContractType' |
  'expectedSalary' |
  'canTakeApprenticeship' |
  'monthsOfCommercialExp'
>
type Rating = Pick<StudentDegreesEntity,
  'courseCompletion' |
  'courseEngagement' |
  'projectDegree' |
  'teamProjectDegree'> & StudentPreferences;
export const RatingTable = ({
                              courseCompletion,
                              courseEngagement,
                              projectDegree,
                              teamProjectDegree,
                              expectedTypeWork,
                              targetWorkCity,
                              expectedContractType,
                              expectedSalary,
                              canTakeApprenticeship,
                              monthsOfCommercialExp,
                            }: Rating) => {
  return (
    <ul className='flex xl:flex-row flex-col px-2'>
      <div
        className='sm:grid sm:grid-cols-4 sm:text-center xl:text-left bg-grades-background'>
        <RateElementWithNumber title='Ocena przejścia kursu'>
          {courseCompletion}
        </RateElementWithNumber>
        <RateElementWithNumber title='  Ocena aktywności i zaangażowania na kursie'>
          {courseEngagement}
        </RateElementWithNumber>
        <RateElementWithNumber title='Ocena kodu w projekcie własnym'>
          {projectDegree}
        </RateElementWithNumber>
        <RateElementWithNumber title='Ocena pracy w zespole Scrum'>
          {teamProjectDegree}
        </RateElementWithNumber>
      </div>
      <div
        className='sm:grid xl:flex sm:grid-cols-2 sm:text-center xl:text-left bg-grades-background'>
        <RateElementWithText title='Preferowane miejsce pracy'>
          {expectedTypeWork == 1 ? 'Biuro' : 'Zdalnie'}
        </RateElementWithText>
        <RateElementWithText title='Docelowe miasto, gdzie chce pracować kandydat'>
          {targetWorkCity ? targetWorkCity : 'Wszędzie'}
        </RateElementWithText>
        <RateElementWithText title='Oczekiwany typ kontraktu'>
          {contractType[expectedContractType]}
        </RateElementWithText>
        <RateElementWithText title='Oczekiwane wynagrodzenie miesięczne netto'>
          {expectedSalary ? `${expectedSalary} zł` : 'Nie podano'}
        </RateElementWithText>
        <RateElementWithText title='Zgoda na odbycie bezpłatnych praktyk/stażu na początek'>
          {canTakeApprenticeship ? 'TAK' : 'NIE'}
        </RateElementWithText>
        <RateElementWithText title='Komercyjne doświadczenie w programowaniu'>
          {monthsOfCommercialExp ? `${monthsOfCommercialExp} miesięcy` : 'Nie podano'}
        </RateElementWithText>
      </div>
    </ul>
  );
};

export const RatingForUser = ({
                                courseCompletion,
                                courseEngagement,
                                projectDegree,
                                teamProjectDegree,
                                expectedTypeWork,
                                targetWorkCity,
                                expectedContractType,
                                expectedSalary,
                                canTakeApprenticeship,
                                monthsOfCommercialExp,
                              }: Rating)  => {
  return (
    <>
        <div className={"h-14 p-5 w-full flex justify-start text-lg text-light-primary-text items-center bg-secondary-background"}>
            <span className={"font-semibold"}>Oceny</span>
        </div>
      <div
        className='sm:grid sm:grid-cols-4 sm:text-center xl:text-left bg-grades-background'>

        <RateElementWithNumber title='Ocena przejścia kursu'>
          {courseCompletion}
        </RateElementWithNumber>
        <RateElementWithNumber title='  Ocena aktywności i zaangażowania na kursie'>
          {courseEngagement}
        </RateElementWithNumber>
        <RateElementWithNumber title='Ocena kodu w projekcie własnym'>
          {projectDegree}
        </RateElementWithNumber>
        <RateElementWithNumber title='Ocena pracy w zespole Scrum'>
          {teamProjectDegree}
        </RateElementWithNumber>
      </div>
        <div className={"h-14 p-5 flex justify-start text-lg text-light-primary-text items-center bg-secondary-background"}>
            <span className={"font-semibold"}>Oczekiwanie w stosunku do zatrudnienia</span>
        </div>
      <div
        className='sm:grid xl:flex sm:grid-cols-2 sm:text-center xl:text-left bg-grades-background'>
        <RateElementWithText title='Preferowane miejsce pracy'>
          {expectedTypeWork == 1 ? 'Biuro' : 'Zdalnie'}
        </RateElementWithText>
        <RateElementWithText title='Docelowe miasto, gdzie chce pracować kandydat'>
          {targetWorkCity ? targetWorkCity : 'Wszędzie'}
        </RateElementWithText>
        <RateElementWithText title='Oczekiwany typ kontraktu'>
          {contractType[expectedContractType]}
        </RateElementWithText>
        <RateElementWithText title='Oczekiwane wynagrodzenie miesięczne netto'>
          {expectedSalary ? `${expectedSalary} zł` : 'Nie podano'}
        </RateElementWithText>
        <RateElementWithText title='Zgoda na odbycie bezpłatnych praktyk/stażu na początek'>
          {canTakeApprenticeship ? 'TAK' : 'NIE'}
        </RateElementWithText>
        <RateElementWithText title='Komercyjne doświadczenie w programowaniu'>
          {monthsOfCommercialExp ? `${monthsOfCommercialExp} miesięcy` : 'Nie podano'}
        </RateElementWithText>
      </div>
    </>
  );
};
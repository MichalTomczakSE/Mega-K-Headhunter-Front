import { useCallback, useState } from 'react';
import { OneStudentResponse } from '../../../mega-k-headhunter-back/src/types/student/student-entity';
import { Button } from '@/components/common/Button';
import { Modal } from '@/components/modal/Modal';
import { GradeButton } from '@/components/filter/GradeButton';
import { SelectButton } from '@/components/filter/SelectButton';
import { SalaryInput } from '@/components/filter/SalaryInput';
import { RadioForm } from '@/components/filter/RadioForm';
import { ExperienceInput } from '@/components/filter/ExperienceInput';


type StudentDegreeForm = Pick<OneStudentResponse['degrees'], 'courseCompletion' | 'courseEngagement' | 'projectDegree' | 'teamProjectDegree'>;
type StudentPreferencesForm = Omit<OneStudentResponse, 'id' | 'githubUsername' | 'firstName' | 'lastName' | 'degrees' | 'targetWorkCity'>
type StudentFilterForm = StudentDegreeForm & StudentPreferencesForm;
type StudentPreferencesKeys = keyof StudentPreferencesForm;

const initialGradeState:StudentDegreeForm = {
  courseCompletion: 0,
  courseEngagement: 0,
  projectDegree: 0,
  teamProjectDegree: 0,
}

const initialPreferencesState:StudentPreferencesForm = {
  expectedTypeWork: null,
  expectedSalary: null,
  canTakeApprenticeship: null,
  workExperience: 0,
  expectedContract: [],
}

export const FilterForm = () => {

  const [showModal, setShowModal] = useState<boolean>(false);
  const [resetButton, setResetButton] = useState(false);
  const [selectedGrades, setSelectedGrades] = useState<StudentDegreeForm>(initialGradeState);
  const [selectedPreferences, setSelectedPreferences] = useState<StudentPreferencesForm>(initialPreferencesState);

  const handleClearButtonClick = () => {
    setResetButton(true);
    setSelectedGrades(initialGradeState)
    setSelectedPreferences(initialPreferencesState)
  };

  const handleGradeSelected = useCallback((buttonKey: keyof StudentDegreeForm, value: number) => {
    setResetButton(false);
    setSelectedGrades((prevGrades) => ({
      ...prevGrades,
      [buttonKey]: value,
    }));
  }, []);

  const handlePreferencesSelected = useCallback((buttonKey: StudentPreferencesKeys, value: StudentPreferencesForm [StudentPreferencesKeys]) => {
    setResetButton(false);
    setSelectedPreferences((prevPreferences) => ({
      ...prevPreferences,
      [buttonKey]: value,
    }));
  }, []);

  // @TODO POST this to backend!
  const handleSendForm = (): StudentFilterForm => {
    const data =  ({
      ...selectedGrades,
      ...selectedPreferences,
    });
    cancelAndResetForm()
    return data;
  };

  const cancelAndResetForm = () => {
    setShowModal(false);
    setSelectedGrades(initialGradeState);
    setSelectedPreferences(initialPreferencesState);
  }

  const handleExperienceChange = useCallback((value: number) => {
    handlePreferencesSelected('workExperience', value);
  }, [handlePreferencesSelected]);


  return (
    <>
      <Button
        color='bg-navbar-background'
        onClick={() =>
          setShowModal(true)
        }>
        <svg
          className='inline mr-1 mb-1'
          xmlns='http://www.w3.org/2000/svg'
          width='12'
          height='12'
          viewBox='0 0 512 512'>
          <path d='M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0
           12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z'
                fill='#4d4d4d' />
        </svg>
        Filtrowanie
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}>
        <div>
          <div
            className='flex items-center justify-between my-5'>
            Filtrowanie
            <Button
              onClick={handleClearButtonClick}
              color='bg-clear-button'>
              Wyczyść wszystkie
            </Button>
          </div>
          <GradeButton
            onReset={resetButton}
            filterTitle='Ocena przejścia kursu'
            onGradeSelected={(value) => handleGradeSelected('courseCompletion', value)}
            grade={5} />
          <GradeButton
            onReset={resetButton}
            filterTitle='Ocena aktywności i zaangażowania na kursie'
            onGradeSelected={(value) => handleGradeSelected('courseEngagement', value)}
            grade={5} />
          <GradeButton
            onReset={resetButton}
            filterTitle='Ocena kodu w projekcie własnym'
            onGradeSelected={(value) => handleGradeSelected('projectDegree', value)}
            grade={5} />
          <GradeButton
            onReset={resetButton}
            filterTitle='Ocena pracy w zespole Scrum'
            onGradeSelected={(value) => handleGradeSelected('teamProjectDegree', value)}
            grade={5} />
          <SelectButton
            onReset={resetButton}
            multipleChoice={false}
            onSelectClick={(value) => handlePreferencesSelected('expectedTypeWork', value == undefined ? null : value)}
            filterTitle='Preferowane miejsce pracy'
            buttons={['Praca zdalna', 'Praca w biurze']} />
          <SelectButton
            onReset={resetButton}
            multipleChoice={true}
            onSelectClick={(value) => handlePreferencesSelected('expectedContract', value)}
            filterTitle='Oczekiwany typ kontraktu'
            buttons={['Umowa o pracę', 'B2B', 'Umowa zlecenie', 'Umowa o dzieło']} />
          <SalaryInput
            onReset={resetButton}
            filterTitle='Oczekiwane wynagrodzenie miesięczne netto'
            onInputChange={(value) => handlePreferencesSelected('expectedSalary', [parseInt(value.min), parseInt(value.max)])} />
          <RadioForm
            onReset={resetButton}
            filterTitle='Zgoda na odbycie bezpłatnych praktyk/stażu na początek'
            onRadioChange={(value) => handlePreferencesSelected('canTakeApprenticeship', (value == 'Tak'))}
            radioOptions={['Tak', 'Nie']}
            initialValue='Tak'
          />
          <ExperienceInput
            filterTitle='Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu'
            onValueChange={handleExperienceChange} />
          <div
            className='flex mb-2 justify-end'>
            <Button
              color='black'
              onClick={() => cancelAndResetForm()}>
              Anuluj
            </Button>
            <Button
              onClick={handleSendForm}>
              Pokaż wyniki
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
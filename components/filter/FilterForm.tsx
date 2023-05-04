import { useCallback, useState } from 'react';
import { Button } from '@/components/common/Button';
import { Modal } from '@/components/modal/Modal';
import { GradeButton } from '@/components/filter/GradeButton';
import { SelectButton } from '@/components/filter/SelectButton';
import { SalaryInput } from '@/components/filter/SalaryInput';
import { RadioForm } from '@/components/filter/RadioForm';
import { ExperienceInput } from '@/components/filter/ExperienceInput';
import { OneStudentResponse } from '@/types';


type StudentDegreeForm = Pick<OneStudentResponse['degrees'], 'courseCompletion' | 'courseEngagement' | 'projectDegree' | 'teamProjectDegree'>;
type StudentPreferencesForm = Omit<OneStudentResponse, 'id' | 'githubUsername' | 'firstName' | 'lastName' | 'degrees' | 'targetWorkCity'>
type StudentFilterForm = StudentDegreeForm & StudentPreferencesForm;
type StudentPreferencesKeys = keyof StudentPreferencesForm;

const initialGradeState: StudentDegreeForm = {
  courseCompletion: 0,
  courseEngagement: 0,
  projectDegree: 0,
  teamProjectDegree: 0,
};

const initialPreferencesState: StudentPreferencesForm = {
  expectedTypeWork: null,
  expectedSalary: null,
  canTakeApprenticeship: null,
  workExperience: 0,
  expectedContract: [],
};

interface FilterFormProps {
  modalStatus: boolean,
  callback: (arg: false) => void                ,
}

export const FilterForm = ({ modalStatus, callback }: FilterFormProps) => {

  const [resetButton, setResetButton] = useState(false);
  const [selectedGrades, setSelectedGrades] = useState<StudentDegreeForm>(initialGradeState);
  const [selectedPreferences, setSelectedPreferences] = useState<StudentPreferencesForm>(initialPreferencesState);

  const handleCallback = () => callback(false);
  const handleClearButtonClick = () => {
    setResetButton(true);
    setSelectedGrades(initialGradeState);
    setSelectedPreferences(initialPreferencesState);
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
    const data = ({
      ...selectedGrades,
      ...selectedPreferences,
    });
    cancelAndResetForm();
    return data;
  };

  const cancelAndResetForm = () => {
    handleCallback();
    setSelectedGrades(initialGradeState);
    setSelectedPreferences(initialPreferencesState);
  };

  const handleExperienceChange = useCallback((value: number) => {
    handlePreferencesSelected('workExperience', value);
  }, [handlePreferencesSelected]);


  return (
    <>
      <Modal
        isOpen={modalStatus}
        onClose={() => handleCallback()}>
        <div>
          <div
            className='flex items-center justify-between my-5'>
            <h2
              className='text-[22px] font-bold'>
              Filtrowanie
            </h2
            >
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
            initialValue='Nie'
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
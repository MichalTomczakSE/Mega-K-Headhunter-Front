
import { StudentDegreesEntity } from "./student-degrees-entity";

export enum StudentStatus {
  available = 1,
  awaiting = 2,
  hired = 3,
}
import { GradingScale } from '@/types';
export interface StudentEntity {
  id: string;
  email: string;
  phoneNumber: string | null;
  firstName: string;
  lastName: string;
  githubUsername: string;
  portfolioUrls: string | null;
  projectUrls: string;
  bio: string | null;
  expectedTypeWork: number;
  targetWorkCity: string | null;
  expectedContractType: number;
  expectedSalary: number | null;
  canTakeApprenticeship: boolean;
  monthsOfCommercialExp: number;
  education: string | null;
  workExperience: string | null;
  courses: string | null;
  isActive: boolean;
  status: StudentStatus;
  grades: {
    courseCompletion: number,
    courseEngagement: number,
    projectDegree: number,
    teamProjectDegree: number,
  },
};

export interface OneStudentResponse {
  id: string,
  githubUsername: string,
  firstName: string,
  lastName: string,
  expectedTypeWork: number | null,
  expectedContract: number[],
  targetWorkCity: string | null,
  expectedSalary: number | null,
  canTakeApprenticeship: boolean | null,
  workExperience: number | null,
  degrees: Omit<StudentDegreesEntity, "id" | "activationToken">

  status: number;
  grades:Grades;
}



interface Grades {
  courseCompletion: GradingScale;
  courseEngagement: GradingScale;
  projectDegree: GradingScale;
  teamProjectDegree: GradingScale;

}
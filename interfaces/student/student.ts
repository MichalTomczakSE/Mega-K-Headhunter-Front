
export enum StudentStatus {
    available = 1,
    awaiting = 2,
    hired = 3,
}

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
    user: UserEntity;
    degrees:{
        email: string,
        courseCompletion: number,
        courseEngagement: number,
        projectDegree: number,
        teamProjectDegree: number,
        bonusProjectUrls: string,
    }
}
export const StudentStartData= {
    id: "",
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    githubUsername: "",
    portfolioUrls: "",
    projectUrls: "",
    bio: "",
    expectedTypeWork: 1,
    targetWorkCity: "",
    expectedContractType: 0,
    expectedSalary: 0,
    canTakeApprenticeship: false,
    monthsOfCommercialExp: 0,
    education: "",
    workExperience: "",
    courses: "",
    isActive: true,
    status: 1,
    user: {
        id: "",
        email: "",
        password: "",
        role: 1,
        currentToken: "",
    },
    degrees: {
        email: "michal.zielinski@example.com",
        courseCompletion: 4,
        courseEngagement: 4,
        projectDegree: 5,
        teamProjectDegree: 4,
        bonusProjectUrls: "https://michalzielinskibonusprojects.com"
    }
}

export enum UserRole {
    admin = 1,
    hr = 2,
    student = 3,
}
export interface UserEntity {
    id: string;
    email?: string;
    password: string;
    role: UserRole;
    currentToken: string;
}
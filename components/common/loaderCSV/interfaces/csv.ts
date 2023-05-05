export interface CsvFileProps{
    [key:string]:string|number,
    email:string,
    courseCompletion:string|number,
    courseEngagement:string|number,
    projectDegree:string|number,
    teamProjectDegree:string|number,
    bonusProjectUrls:string,
}

export interface headerName{
    [key:string]:string;
    email:string,
    courseCompletion:string,
    courseEngagement:string,
    projectDegree:string,
    teamProjectDegree:string,
    bonusProjectUrls:string,
    fullName:string,
    company:string
}
export interface UserDetailsInterface{
    firstName: string,
    lastName: string,
    githubUsername: string,
    phoneNumber: string,
    email: string,
    bio:string,
}

export interface UserInfoInterface{
    [p: string]: string | string[]
    education:string,
    courses:string,
    workExperience:string,


    portfolioUrls:string[],
    projectUrls:string[],
    bonusProjectUrls:string[],

}
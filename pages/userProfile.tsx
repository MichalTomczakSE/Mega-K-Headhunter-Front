import {UserDetails} from "@/components/common/userProfile/userDetails/userDetails";
import {UserInfo} from "@/components/common/userProfile/userInfo/userInfo";
import {Header} from "@/components/common/Header";
import {GoBack} from "@/components/common/goBack/goBack";

interface UserProps{
        firstName: string,
        lastName: string,
        githubUsername: string,
        phoneNumber: string,
        email: string,
        bio:string,
}

const testUser:UserProps={
    firstName:"test",
    lastName:"test",
    githubUsername:"zrodozrodo",
    phoneNumber:"+48 1321231231",
    email:"test@test",
    bio:"   adipiscing elit, sed do eiusmod tempor incididunt ut\n" +
        "                         labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
        "                         quis nostru anim id est labadipiscing elit, sed do eiusmod tempor incididunt ut\n" +
        "                         labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
        "                         quis nostru anim id est laboradipiscing elit, sed do eiusmod tempor incididunt ut\n" +
        "                         labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
        "                         quis nostru anim id est laboradipiscing elit, sed do eiusmod tempor incididunt ut\n" +
        "                         labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
        "                         quis nostru anim id est laboradipiscing elit, sed do eiusmod tempor incididunt ut\n" +
        "                         labore et dolore magna aliqua. Ut enim ad minim veniam,\n" +
        "                         quis nostru anim id est laboror"
}

interface testUserInfo{

    education:string,
    courses:string,
    workExperience:string,


    portfolioUrls:string[],
    projectUrls:string[],
    bonusProjectUrls:string[],

}

const test:testUserInfo={
    /*courseCompletion:5,
    courseEngagement:4,
    projectDegree:3,
    teamProjectDegree:2,

    expectedTypeWork:"Biuro",
    targetWorkCity:"Częstochowa",
    expectedContractType:"Umowa o pracę",
    expectedSalary:16000,
    canTakeApprenticeship:"Tak",
    monthsOfCommercialExp:1,*/

    education:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    courses:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    workExperience:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    portfolioUrls:["https://www.onet.pl/","https://www.onet.pl/"],
    projectUrls:["https://www.onet.pl/","https://www.onet.pl/"],
    bonusProjectUrls:["https://www.onet.pl/","https://www.onet.pl/"]

}




const UserProfile=()=>{
    return (
        <div>
            <Header/>
            <div className={"flex h-auto sm:h-full sm:flex-row flex-col pr-36 pt-5 pl-36 bg-primary-background space-y-2 sm:space-y-0 space-x-0 sm:space-x-2"}>
                <GoBack/>
                <div className={"sm:h-screen flex justify-center"}>
                    <UserDetails data={testUser}/>
                </div>
                <UserInfo data={test}/>
            </div>
        </div>
    )
}

export default UserProfile;
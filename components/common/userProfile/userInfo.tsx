import {UserDetails} from "@/components/common/userProfile/userDetails";
import {DetailsLayout} from "@/components/common/userProfile/detailsLayout";

interface UserInfoInterface{
    data: {
        courseCompletion: number,
        courseEngagement: number,
        projectDegree: number,
        teamProjectDegree: number,

        expectedTypeWork: string,
        targetWorkCity: string,
        expectedContractType: string,
        expectedSalary: number,
        canTakeApprenticeship: string,
        monthsOfCommercialExp: number,

        education: string,
        courses: string,
        workExperience: string,


        portfolioUrls: string[],
        projectUrls: string[],
        bonusProjectUrls: string[],
    }
}

const layauttest={
    name:"Oceny",
    description:"iusfdhiausfhgiusadf"
}



export const UserInfo=({data}:UserInfoInterface)=>{
    const {
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
        education,
        courses,
        workExperience,
        portfolioUrls,
        projectUrls,
        bonusProjectUrls,
    }=data;


return (
    <>
        <DetailsLayout data={layauttest}/>
    </>
)
}
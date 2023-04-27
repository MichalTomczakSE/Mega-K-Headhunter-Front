import {InfoList} from "./infoList";

interface UserInfoInterface {
    data: {
        education: string,
        courses: string,
        workExperience: string,

        portfolioUrls: string[],
        projectUrls: string[],
        bonusProjectUrls: string[],
    }
}

export const UserInfo=({data}:UserInfoInterface)=>{
return (
    <>
        <InfoList data={data}/>
    </>
)
}
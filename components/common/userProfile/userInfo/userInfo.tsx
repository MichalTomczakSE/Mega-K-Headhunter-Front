import {UserDetails} from "@/components/common/userProfile/userDetails/userDetails";
import {InfoLayout} from "@/components/common/userProfile/userInfo/infoLayout";
import {InfoList} from "@/components/common/userProfile/userInfo/infoList";

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

const layauttest={
    name:"Oceny",
    description:"iusfdhiausfhgiusadf"
}



export const UserInfo=({data}:UserInfoInterface)=>{



return (
    <>
        <InfoList data={data}/>
    </>
)
}
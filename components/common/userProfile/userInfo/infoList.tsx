import {InfoLayout} from "@/components/common/userProfile/userInfo/infoLayout";
import {v4 as uuid} from 'uuid';
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

export const InfoList=({data}:UserInfoInterface)=>{
    const keys:string[]=Object.keys(data);
    return (
        <div>
            {keys.map(value=><InfoLayout key={uuid} name={value} description={data[value]} />)}
        </div>
    )
}
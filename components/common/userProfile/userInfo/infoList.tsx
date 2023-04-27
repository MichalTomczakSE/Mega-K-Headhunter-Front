import {InfoLayout} from "./infoLayout";
import {v4 as uuid} from 'uuid';
interface UserInfoInterface {
    data: {
        [key: string]: string | string[],
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
            {keys.map(value=><InfoLayout key={uuid.toString()} name={value} description={data[value]} />)}
        </div>
    )
}
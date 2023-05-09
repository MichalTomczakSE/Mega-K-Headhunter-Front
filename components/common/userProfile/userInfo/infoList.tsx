import {InfoLayout} from "./infoLayout";
import {v4 as uuid} from 'uuid';
import {UserInfoInterface} from "@/interfaces/user/userInterfaces";
interface PropsInterface {
    data: UserInfoInterface
}

export const InfoList=({data}:PropsInterface)=>{
    const keys:string[]=Object.keys(data);
    return (
        <div>
            {keys.map((value,index)=><InfoLayout key={index} name={value} description={data[value]} />)}
        </div>
    )
}
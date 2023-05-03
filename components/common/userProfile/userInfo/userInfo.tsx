import {InfoList} from "./infoList";
import {UserInfoInterface} from "@/interfaces/user/userInterfaces";

interface PropsInterface {
    data: UserInfoInterface
}

export const UserInfo=({data}:PropsInterface)=>{
return (
    <>
        <InfoList data={data}/>
    </>
)
}
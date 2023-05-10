import {InfoList} from "./infoList";
import {UserInfoInterface} from "@/interfaces/user/userInterfaces";
import {useState} from "react";

interface PropsInterface {
    data: UserInfoInterface
}

export const UserInfo=({data}:PropsInterface)=>{

    const [info,setInfo]=useState<UserInfoInterface>(data)
    const [edit,setEdit]=useState<boolean>(true);

return (
    <>
        <InfoList edit={edit} setEdit={setEdit} setInfo={setInfo} data={info}/>
    </>
)
}
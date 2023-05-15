import {InfoList} from "./infoList";
import {Dispatch, SetStateAction} from "react";
import {StudentEntity} from "@/interfaces/student/student";
import {Button} from "@/components/common/Button";

interface UserProps{
    data: StudentEntity,
    edit:boolean,
    setEdit: Dispatch<SetStateAction<boolean>>,
    setData: Dispatch<SetStateAction<StudentEntity>>,
    send:()=>void
}

export const UserInfo=({send,setData,setEdit,edit,data}:UserProps)=>{
return (
    <>
        <InfoList edit={edit} setEdit={setEdit} setData={setData} data={data}/>
        <Button onClick={()=>send()}>Zatwierdź zmiany</Button>
    </>
)
}
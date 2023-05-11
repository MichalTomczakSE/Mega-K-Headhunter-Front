import {InfoLayout} from "./infoLayout";
import {UserInfoInterface} from "@/interfaces/user/userInterfaces";
import {Dispatch, SetStateAction, useState} from "react";
import {Button} from "@/components/common/Button";
import {useFieldArray, useForm} from "react-hook-form";
import {StudentEntity} from "@/interfaces/student/student";
import {InfoLinkLayout} from "@/components/common/userProfile/userInfo/infoLinkLayout";
interface UserProps{
    data: StudentEntity,
    edit:boolean,
    setEdit: Dispatch<SetStateAction<boolean>>,
    setData: Dispatch<SetStateAction<StudentEntity>>,
}


export const InfoList=({setData,setEdit,edit,data}:UserProps)=>{

    const { register,handleSubmit } = useForm<UserInfoInterface>({
        defaultValues: {
            education:data.education?data.education:"",
            courses:data.courses?data.courses:"",
            workExperience:data.workExperience?data.workExperience:"",
        },
    });



    const formHandler = (formValues:UserInfoInterface) => {
        const {education,courses,workExperience}=formValues;
        setData(prevState => ({...prevState,education,courses,workExperience}))
        setEdit(prevState => !prevState)
    };

    if(data) {


        return (
            <div>
                <form onSubmit={handleSubmit((formValues) => formHandler(formValues))}>

                    <InfoLayout name={"Edukacja"} register={register("education", {required: false})} edit={edit}
                                description={data.education}/>
                    <InfoLayout name={"Kursy"} register={register("courses", {required: false})} edit={edit}
                                description={data.courses}/>
                    <InfoLayout name={"Doświadczenie zawodowe"} register={register("workExperience", {required: false})}
                                edit={edit} description={data.workExperience}/>
                    <InfoLinkLayout id={'portfolioUrls'} setData={setData} name={'Portfolio'} edit={edit} description={data.portfolioUrls?data.portfolioUrls:""}/>
                    <InfoLinkLayout name={'Projekt w zespole Scrumowym'} setData={setData} id={'Portfolio'} edit={edit} description={data.projectUrls?data.projectUrls:""}/>
                    <InfoLinkLayout name={'Projekt na zaliczenie'}  description={data.degrees.bonusProjectUrls?data.degrees.bonusProjectUrls:""}/>
                    <div className={'space-x-2 my-4'}>
                        <Button
                            onClick={() => setEdit(prevState => !prevState)}>{edit ? "Edytuj" : "Wyjdź z edycji"}</Button>
                        {!edit ? <Button type={"submit"}>Zapisz</Button> : null}
                    </div>
                </form>
            </div>
        )
    }
    else{
        return <>Loading ..</>
    }
}
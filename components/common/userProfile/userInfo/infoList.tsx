import {InfoLayout} from "./infoLayout";
import {UserInfoInterface} from "@/interfaces/user/userInterfaces";
import {Dispatch, SetStateAction, useState} from "react";
import {Button} from "@/components/common/Button";
import {useFieldArray, useForm} from "react-hook-form";
interface PropsInterface {
    data: UserInfoInterface,
    setInfo: Dispatch<SetStateAction<UserInfoInterface>>,
    edit: boolean,
    setEdit: Dispatch<SetStateAction<boolean>>
}

export const InfoList=({edit,setEdit,data,setInfo}:PropsInterface)=>{

    const { register,handleSubmit } = useForm<UserInfoInterface>({
        defaultValues: {
            education:data.education,
            courses:data.courses,
            workExperience:data.workExperience,
        },
    });



    const formHandler = (formValues:UserInfoInterface) => {
        const {education,courses,workExperience}=formValues;
        setInfo({...data,education,courses,workExperience})
        setEdit(prevState => !prevState)
    };

    const send=()=>{

    }

    return (
        <div>
            <form onSubmit={handleSubmit((formValues) => formHandler(formValues))}>

                <InfoLayout name={"Edukacja"} register={register("education", { required: false })} edit={edit} description={data.education} />
                <InfoLayout name={"Kursy"} register={register("courses", { required: false })}  edit={edit} description={data.courses} />
                <InfoLayout name={"Doświadczenie zawodowe"} register={register("workExperience", { required: false })} edit={edit} description={data.workExperience} />
                <InfoLayout name={"Portfolio"} id={'portfolioUrls'} setInfo={setInfo} data={data} edit={edit} description={data.portfolioUrls} />
                <InfoLayout name={"Projekt w zespole Scrumowym"} id={'projectUrls'} setInfo={setInfo} data={data} edit={edit}  description={data.projectUrls} />
                <InfoLayout name={"Projekt na zaliczenie"} id={'bonusProjectUrls'} setInfo={setInfo} data={data} edit={edit} description={data.bonusProjectUrls} />
                <div className={'space-x-2'}>
                <Button onClick={()=>setEdit(prevState => !prevState)}>{edit?"Edytuj":"Wyjdź z edycji"}</Button>
                {!edit?<Button type={"submit"}>Zapisz</Button>:null}
                {edit?<Button onClick={()=>send()}>Wyślij</Button>:null}
                </div>
            </form>
        </div>
    )
}
import {LinkComponent} from "./linkComponent";
import {v4 as uuid} from 'uuid';
import {Dispatch, SetStateAction, useState} from "react";
import {UserInfoInterface} from "@/interfaces/user/userInterfaces";
import {UseFormRegisterReturn} from "react-hook-form";
import {Button} from "@/components/common/Button";
import {StudentEntity} from "@/interfaces/student/student";

interface DetailsInterface{

    name: string,
    description?: string|string[]|null;
    elements?: JSX.Element[];
    edit:boolean,
    setData?: Dispatch<SetStateAction<StudentEntity>>,
    data?: StudentEntity,
    register?: UseFormRegisterReturn<string>;
    id?:string,
}

export const InfoLayout=({register,edit,name,description}:DetailsInterface)=>{

    return (
        <div className={"flex w-full flex-col"}>
            <div className={"h-14 p-5 flex justify-start text-lg text-light-primary-text items-center bg-secondary-background"}>
                <span className={"font-semibold"}>{name}</span>
            </div>
            {description&&
                <div className={"h-fit p-5 w-full flex justify-start text-light-primary-text text-sm items-center "}>
                    {edit?<span className={"space-y-2"}>
                         {description}
                    </span>
                        :
                        <span className={"space-y-2 w-full"}>
                            <textarea
                                {...register}
                                className={"resize border-2 border-secondary-background bg-primary-background w-full rounded-md"}
                            />
                    </span>
                    }
                </div>
            }
        </div>
    )
}
import {LinkComponent} from "./linkComponent";
import {v4 as uuid} from 'uuid';
import {Dispatch, SetStateAction, useState} from "react";
import {UserInfoInterface} from "@/interfaces/user/userInterfaces";
import {UseFormRegisterReturn} from "react-hook-form";
import {Button} from "@/components/common/Button";

interface DetailsInterface{

    name: string,
    description: string|string[];
    elements?: JSX.Element[];
    edit:boolean,
    setInfo?: Dispatch<SetStateAction<UserInfoInterface>>,
    data?: UserInfoInterface,
    register?: UseFormRegisterReturn<string>;
    id?:string,
}

export const InfoLayout=({id,setInfo,data,register,edit,name,description,elements}:DetailsInterface)=>{

    const [newUrl,setNewUrl]=useState<string>("")

    const setData=(url:string)=>{
        if(typeof description=='object') {
            const array = description.filter(item=>item!=url)
            if(setInfo&&data&&id) {
                setInfo({...data, [id]:array})
            }
        }
    }

    const add=()=>{
        if(typeof description=='object') {
            const array=description.push(newUrl);
            setNewUrl("");
            if(setInfo&&data&&id) {
                setInfo({...data, [id]:description})
            }
        }
    }

    return (
        <div className={"flex w-full flex-col"}>
            <div className={"h-14 p-5 flex justify-start text-lg text-light-primary-text items-center bg-secondary-background"}>
                <span className={"font-semibold"}>{name}</span>
            </div>
            {description&&
                <div className={"h-fit p-5 w-full flex justify-start text-light-primary-text text-sm items-center "}>
                    {edit?<span className={"space-y-2"}>
                        {typeof description === 'string' ? description : description.map((url,index) => <LinkComponent key={index} url={url}/>)}
                    </span>
                        :
                        <span className={"space-y-2 w-full"}>
                        {typeof description === 'string' ?
                            <textarea
                                {...register}
                                className={"resize border-2 border-secondary-background bg-primary-background w-full rounded-md"}
                            />

                            :
                            <>{description.map((url,index) =>
                                <>
                                    <LinkComponent key={index} url={url}/><Button onClick={()=>setData(url)}>Usuń</Button>
                                </>
                                )}
                                <input type={'text'} className={"border-2 border-secondary-background bg-primary-background w-full"} value={newUrl} onChange={e=>setNewUrl(e.target.value)}/> <Button onClick={()=>add()}>Dodaj </Button>
                            </>}
                    </span>
                    }
                </div>
            }
            {
                elements&&
                <div>
                    {elements.map((element,index)=><div key={index}>{element}</div>)}
                </div>
            }
        </div>
    )
}
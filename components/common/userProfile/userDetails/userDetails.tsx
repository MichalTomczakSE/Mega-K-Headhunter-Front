import Image from "next/image";
import {UserDetailsInterface, UserInfoInterface} from "@/interfaces/user/userInterfaces";
import {Button} from "@/components/common/Button";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {StudentEntity} from "@/interfaces/student/student";

interface UserProps{
    data: StudentEntity,
    edit:boolean,
    setEdit: Dispatch<SetStateAction<boolean>>,
    setData: Dispatch<SetStateAction<StudentEntity>>,
}


export const UserDetails=({setData,setEdit,edit,data}:UserProps)=>{



    console.log(data);
    const { register,handleSubmit } = useForm<UserDetailsInterface>({
        defaultValues: {
            phoneNumber:data.phoneNumber?data.phoneNumber:"",
            bio:data.bio?data.bio:"",
            firstName:data.firstName,
            lastName:data.lastName,
            email:data.email,
            githubUsername:data.githubUsername,
        },
    });

    const formHandler = (formValues:UserDetailsInterface) => {
        const {phoneNumber,bio,firstName,lastName}=formValues
        setEdit(prevState => !prevState)
        setData(prevState => ({...prevState, phoneNumber,bio,firstName,lastName}))

    };

 return(
     <div className={'flex flex-col'}>
         <form onSubmit={handleSubmit((formValues) => formHandler(formValues))}>
         <div className="flex text-light-primary-text flex-col h-fit w-full text-light-primary-text max-w-xs p-4 shadow-md px-12 bg-secondary-background">

             <Image src={`https://github.com/${data.githubUsername}.png`} alt="userPhoto" width={100} height={100} className="w-32 h-32 mx-auto rounded-full aspect-square" />

             <div className="space-y-4 text-center">
                 <div className="my-2 space-y-1">
                     <h2 className="text-xl font-semibold sm:text-2xl">
                         {edit?<span>{data.firstName}</span>:
                             <input {...register("firstName", { required: true })} type={'text'} className={"border-2 border-secondary-background bg-primary-background w-full"}/>
                         } {" "}
                         {edit?<span>{data.lastName}</span>:
                             <input {...register("lastName", { required: true })} type={'text'} className={"border-2 border-secondary-background bg-primary-background w-full"}/>
                         }
                     </h2>

                     <a href={`https://github.com/${data.githubUsername}`} className="px-5 flex justify-center space-x-2 text-hyperlink-text text-base">
                         <svg className={"fill-hyperlink-text"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                         <span>{data.githubUsername}</span>
                     </a>

                 </div>
                     <div>
                     <div className="flex justify-start items-center pt-2 space-x-2 ">
                         <svg width="16" height="16" className={"fill-filter-button"}>
                             <path fill="#444" d="M12.2 10c-1.1-.1-1.7 1.4-2.5 1.8C8.4 12.5 6 10 6 10S3.5 7.6 4.1 6.3c.5-.8 2-1.4 1.9-2.5-.1-1-2.3-4.6-3.4-3.6C.2 2.4 0 3.3 0 5.1c-.1 3.1 3.9 7 3.9 7 .4.4 3.9 4 7 3.9 1.8 0 2.7-.2 4.9-2.6 1-1.1-2.5-3.3-3.6-3.4z"></path>
                         </svg>
                         {edit?<span>{data.phoneNumber}</span>:
                             <input type={"text"} {...register("phoneNumber", { required: true,validate: (value, formValues) => !isNaN(Number(value))&&value.length===9 })}  className={"border-2 border-secondary-background bg-primary-background w-full"}/>
                         }

                     </div>
                     <div className="flex justify-start items-center align-middle pt-2 space-x-2 ">
                         <svg className={"w-5 h-5 fill-filter-button"} width="16" height="16" viewBox="0 0 128 96" id="email"><path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z" data-name="Layer 2"></path></svg>
                         <span>{data.email}</span>
                     </div>
                 </div>
                 <div className={"text-left flex flex-col space-y-2"}>
                     <span className={"text-filter-button font-semibold"}>O mnie</span>
                     {edit?
                         <span className={"content-center text-light-primary-text h-44 font-normal text-sm overflow-y-scroll no-scrollbar"}>{data.bio}</span>
                         :
                         <textarea className={"content-center bg-primary-background border-2 border-secondary-background text-light-primary-text h-44 font-normal text-sm overflow-y-scroll no-scrollbar"}
                                   {...register("bio", { required: true })} />}
                 </div>
                 <div className={"flex flex-col space-y-2 justify-center "}>
                     <Button>Brak zainteresowania</Button>
                     <Button>Zatrudniony</Button>
                 </div>
             </div>

         </div>
         <div className={'flex flex-row justify-between'}>
             <Button onClick={()=>setEdit(prevState => !prevState)}>{edit?'Edytuj':'Zamknij edycje'}</Button>
             {!edit&&<Button type={'submit'}>Zapisz</Button>}
         </div>
     </form>
         </div>

 )

}
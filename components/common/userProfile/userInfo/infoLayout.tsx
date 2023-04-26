import {LinkComponent} from "@/components/common/userProfile/userInfo/linkComponent";
import {v4 as uuid} from 'uuid';
interface DetailsInterface{

    name: string,
    description?: string|string[];
    elements?: JSX.Element;

}

export const InfoLayout=({name,description,elements}:DetailsInterface)=>{
    console.log(description)
    return (
        <div className={"flex w-full flex-col"}>
            <div className={"h-14 p-5 flex justify-start text-lg items-center bg-secondary-background"}>
                <span className={"font-semibold"}>{name}</span>
            </div>
            {description&&
                <div className={"h-fit p-5 flex justify-start text-lg  items-center "}>
                    <span className={"font-semibold space-y-2"}>
                        {typeof description==='string'?description:description.map(url=><LinkComponent key={uuid} url={url}/>)}
                    </span>
                </div>
            }
        </div>
    )
}
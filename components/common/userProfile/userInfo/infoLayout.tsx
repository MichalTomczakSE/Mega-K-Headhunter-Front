import {LinkComponent} from "./linkComponent";
import {v4 as uuid} from 'uuid';

interface DetailsInterface{

    name: string,
    description?: string|string[];
    elements?: JSX.Element[];

}

export const InfoLayout=({name,description,elements}:DetailsInterface)=>{

    return (
        <div className={"flex w-full flex-col"}>
            <div className={"h-14 p-5 flex justify-start text-lg text-light-primary-text items-center bg-secondary-background"}>
                <span className={"font-semibold"}>{name}</span>
            </div>
            {description&&
                <div className={"h-fit p-5 flex justify-start text-light-primary-text text-sm items-center "}>
                    <span className={"space-y-2"}>
                        {typeof description==='string'?description:description.map(url=><LinkComponent key={uuid.toString()} url={url}/>)}
                    </span>
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
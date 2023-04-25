interface DetailsInterface{
    data: {
    name: string,
    description?: string;
    elements?: JSX.Element;
    }
}

export const DetailsLayout=({data}:DetailsInterface)=>{
    const {name,description,elements}=data;

    return (
        <div className={"flex w-full flex-col"}>
            <div className={"h-14 p-5 flex justify-start text-lg items-center bg-secondary-background"}>
                <span className={"font-semibold"}>{name}</span>
            </div>
            <div className={"h-14 p-5 flex justify-start text-lg items-center "}>
                <span className={"font-semibold"}>{description}</span>
            </div>
        </div>
    )
}
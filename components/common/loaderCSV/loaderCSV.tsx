import {ChangeEvent, useEffect, useState} from "react";
import {ValidationCSV} from "@/components/common/loaderCSV/validationCSV";
import {Button} from "@/components/common/Button";

interface csv{
    email:string,
    courseCompletion:string,
    courseEngagement:string,
    projectDegree:string,
    teamProjectDegree:string,
    bonusProjectUrls:string,
}


export const LoaderCSV=()=> {
    const [file, setFile] = useState<File>();
    const [array, setArray] = useState<Array<csv>>([]);
    const [errorRows,setErrorRows]=useState<Set<number>>()
    const [headerValid,setHeaderValid]=useState<boolean>(true)

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) return;
        if(e.target.files.length>0) {
            setFile(e.target.files[0]);
            e.target.value = "";
        }
    };

    const submitCsv=()=>{

        //useFetch...
        if(errorRows?.size==0) {
            setArray([]);
            setErrorRows(new Set());
            setHeaderValid(true);
        }
    }

    const deleteErrors=()=>{
        const goodData=array.filter((row,index)=>!errorRows?.has(index))
        setErrorRows(new Set());
        setArray(goodData);
    }

    useEffect(()=>{
        const fileReader = new FileReader();
        if (file) {
            fileReader.onload = function (event) {
                if(!event.target)return;
                const text:string = event.target.result as string;
                const unformedData= text.replaceAll('"','')
                const data=unformedData.split('\r\n')
                const header=data[0].split(',');
                data.splice(0, 1);
                data.splice(-1, 1);
                const rows=data.map(row=>row.split(','))


                const arr=rows.map(row=>{
                    return header.reduce((object:csv, header, index) => {
                        object[header as keyof csv] = row[index];
                        return object;
                    }, {} as csv);
                })
                ValidationCSV(arr,setErrorRows,setHeaderValid);
                setArray(arr as Array<csv>);
            };

            fileReader.readAsText(file);
        }
    },[file])
    console.log(headerValid)
    return (
        <div>

            <div className={"flex flex-row overflow-x-hidden w-auto"}>
            <form className={"w-1/3"}>
                <span>Przeciągnij plik lub wybierz go przez kliknięcie</span>
                <div className={"h-44 min-w-44 border-2 border-primary-red"}>
                <input
                    className={"opacity-0 h-full w-full "}
                    type={"file"}
                    id={"csvFileInput"}
                    accept={".csv"}
                    onChange={(e)=>handleOnChange(e)}
                />
                </div>
            </form>
                <table className=" w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-light-primary-text bg-primary-background">
                    <tr>
                        <th scope="col" className=" py-3">
                            Ilość błędnych wierszy
                        </th>
                        <th scope="col" className="py-3">
                            Indeksy błędnych wierszy
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td scope="col" className="px-6 py-3 w-72">
                            {headerValid?errorRows?.size:""}
                            {headerValid?"":<span>Błąd w nagłówku</span>}
                        </td>
                        <td scope="col" className="px-6 py-3">
                            {errorRows&&Array.from(errorRows).join(',')}
                            {headerValid?"":"0"}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={"space-y-3 space-x-2"}>
            <Button disabled={errorRows?.size==0} onClick={deleteErrors}>Usuń błędne rekordy</Button><Button disabled={errorRows?.size!=0} onClick={submitCsv}>Wyślij do bazy </Button>
            </div>
            <div className=" w-full overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className={`text-xs text-light-primary-text ${headerValid?"bg-primary-background":"bg-primary-red"}`}>
                    <tr>
                        <th scope="col" className=" py-3">
                            Indeks
                        </th>
                        <th scope="col" className="py-3">
                            Email
                        </th>
                        <th scope="col" className=" py-3">
                            Ocena przejścia kursu
                        </th>
                        <th scope="col" className=" py-3">
                            Ocena aktywności
                        </th>
                        <th scope="col" className=" py-3">
                            Ocena kodu
                        </th>
                        <th scope="col" className=" py-3">
                            Ocena pracy w Scrum
                        </th>
                        <th scope="col" className=" py-3">
                            Url projektu
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {headerValid&& array.map((row,index)=>
                        <tr className={`border-b ${errorRows?.has(index)?"bg-primary-red":""}`} key={index} >
                            <td scope="row"
                                className={` py-4`}>
                                {index}
                            </td>
                        <th scope="row"
                            className={`px-2 py-4 font-medium text-light-primary-text whitespace-nowrap`}>
                            {row.email}
                        </th>
                        <td className=" py-4">
                            {row.courseCompletion}
                        </td>
                        <td className=" py-4">
                            {row.courseEngagement}
                        </td>
                        <td className="py-4">
                            {row.projectDegree}
                        </td>
                        <td className=" py-4">
                            {row.teamProjectDegree}
                        </td>
                        <td className="px-2 py-4">
                            {row.bonusProjectUrls}
                        </td>
                    </tr>)}


                    </tbody>
                </table>
            </div>

        </div>
    );
}

/*
            <table>
                <thead>
                <tr key={"header"}>
                    {headerKeys.map((key) => (
                        <th>{key}</th>
                    ))}
                </tr>
                </thead>

                <tbody>
                {array.map((item) => (
                    <tr key={item.id}>
                        {Object.values(item).map((val) => (
                            <td>{val}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
 */
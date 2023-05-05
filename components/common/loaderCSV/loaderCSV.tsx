import {ChangeEvent, useEffect, useState} from "react";
import {ValidationCSV} from "@/components/common/loaderCSV/validationCSV";
import {Button} from "@/components/common/Button";
import {CsvFileProps, headerName} from "@/components/common/loaderCSV/interfaces/csv";

const headersName:headerName={
    email:"Email",
    courseCompletion:"Ocena przejścia kursu",
    courseEngagement:"Ocena aktywności",
    projectDegree:"Ocena z projektu",
    teamProjectDegree:"Ocena z projektu grupowego",
    bonusProjectUrls:"Url projektu",
    fullName:"Imię i nazwisko",
    company:"Firma"
}


export const LoaderCSV=()=> {
    const [file, setFile] = useState<File>();
    const [array, setArray] = useState<Array<CsvFileProps>>([]);
    const [headers,setHeaders]=useState<Array<string>>([]);
    const [errorRows,setErrorRows]=useState<Set<number>>()
    const [headerValid,setHeaderValid]=useState<boolean>(true)
    const [dataType,setDataType]=useState<string>("")

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) return;
        if(e.target.files.length>0) {
            setFile(e.target.files[0]);
            e.target.value = "";
        }
    };

    const submitCsv=()=>{

        if(errorRows?.size==0&&dataType!=="") {
            console.log(array)
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
                const header=data[0].split(';');
                setHeaders(header);
                data.splice(0, 1);
                data.splice(-1, 1);
                const rows=data.map(row=>row.split(';'))


                const arr=rows.map(row=>{
                    return header.reduce((object:CsvFileProps, header, index) => {
                        object[header as keyof CsvFileProps] = row[index];
                        return object;
                    }, {} as CsvFileProps);
                })
                console.log(arr)
                ValidationCSV(arr,setErrorRows,setHeaderValid,setDataType);
                setArray(arr as Array<CsvFileProps>);
            };

            fileReader.readAsText(file);
        }
    },[file])
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
                            {errorRows&&Array.from(errorRows).map(x=>x+1).join(',')}
                            {headerValid?"":"0"}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={"space-y-3 space-x-2"}>
            <Button disabled={errorRows?.size===0||array.length===0} onClick={deleteErrors}>Usuń błędne rekordy</Button><Button disabled={errorRows?.size!==0||array.length===0||!headerValid} onClick={submitCsv}>Wyślij do bazy </Button>
            </div>
            <div className=" w-full overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className={`text-xs text-light-primary-text ${headerValid?"bg-primary-background":"bg-primary-red"}`}>
                    <tr>
                        <th scope="col" className=" py-3">
                            Lp.
                        </th>
                        {headerValid&&
                            headers.map((x:string,index)=>
                                <th key={index} scope="col" className=" py-3">
                                    {headersName[x]}
                                </th>)
                    }
                    </tr>
                    </thead>
                    <tbody>
                    {headerValid&& array.map((row:CsvFileProps,index)=>
                        <tr key={index} className={`border-b ${errorRows?.has(index)?"bg-primary-red":""}`} >
                            <td scope="row"
                                className={` py-4`}>
                                {index+1}
                            </td>


                            {headers.map((x,_index)=>
                                <td className=" py-4" key={index}>
                                    {row[x]}
                                </td>
                            )}

                    </tr>)}


                    </tbody>
                </table>
            </div>

        </div>
    );
}

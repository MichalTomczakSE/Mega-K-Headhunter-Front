import {CsvFileProps} from "@/components/common/loaderCSV/interfaces/csv";
import {Dispatch, SetStateAction} from "react";


const checkValue=(number:number)=>{
    return !(number >= 0 && number <= 5);
}

export const ValidationCSV=(
    csv:Array<CsvFileProps>,
    setErrorRows:(value: (((prevState: (Set<number> | undefined)) => (Set<number> | undefined)) | Set<number> | undefined)) => void,
    setHeaderValid:(value: (((prevState: boolean) => boolean) | boolean)) => void,
    setDataType: Dispatch<SetStateAction<string>>
)=>{




    const keys=Object.keys(csv[0])
    console.log(keys.toString())
    if(keys.toString()=="email,courseCompletion,courseEngagement,projectDegree,teamProjectDegree,bonusProjectUrls") {
        setHeaderValid(true)
        setDataType("student")
        const errorRows = new Set<number>();
        csv.forEach((row: CsvFileProps, _index) => {
            keys.forEach((key, index) => {
                if (row[keys[index] as keyof CsvFileProps] == '') {
                    errorRows.add(_index);
                }
            })
            row.courseCompletion=Number(row.courseCompletion);
            row.courseEngagement=Number(row.courseEngagement);
            row.projectDegree=Number(row.projectDegree);
            row.teamProjectDegree=Number(row.teamProjectDegree);
            if(
                checkValue(row.courseCompletion)||
                checkValue(row.courseEngagement)||
                checkValue(row.projectDegree)||
                checkValue(row.teamProjectDegree)
            ){
                errorRows.add(_index);
            }
        })
        setErrorRows(errorRows);



    }
    else if(keys.toString()=="email,fullName,company")
    {
        setHeaderValid(true)
        setDataType("hr")
        const errorRows = new Set<number>();
        csv.forEach((row: CsvFileProps, _index) => {
            keys.forEach((key, index) => {
                if (row[keys[index] as keyof CsvFileProps] == '') {
                    errorRows.add(_index);
                }
            })
        })
        setErrorRows(errorRows)
    }
    else {
        setHeaderValid(false)
        const errorRows = new Set<number>();
        setErrorRows(errorRows);
    }

}
import {object} from "prop-types";

interface CsvRow {
    [key: string]: string|undefined;
}
interface csv{
    email:string,
    courseCompletion:string,
    courseEngagement:string,
    projectDegree:string,
    teamProjectDegree:string,
    bonusProjectUrls:string,
}


export const ValidationCSV=(
    csv:Array<csv>,
    setErrorRows:(value: (((prevState: (Set<number> | undefined)) => (Set<number> | undefined)) | Set<number> | undefined)) => void,
    setHeaderValid:(value: (((prevState: boolean) => boolean) | boolean)) => void
)=>{
    console.log(csv)

    const keys=Object.keys(csv[0])

    if(keys.toString()=="email,courseCompletion,courseEngagement,projectDegree,teamProjectDegree,bonusProjectUrls") {
        console.log("działa")
        setHeaderValid(true)

        const errorRows = new Set<number>();
        csv.forEach((row: csv, _index) => {
            keys.forEach((key, index) => {
                if (row[keys[index] as keyof csv] == undefined) {
                    errorRows.add(_index);
                }
            })
        })
        setErrorRows(errorRows);
    }
    else {
        console.log("nie działa")
        setHeaderValid(false)
        const errorRows = new Set<number>();
        setErrorRows(errorRows);
    }

}
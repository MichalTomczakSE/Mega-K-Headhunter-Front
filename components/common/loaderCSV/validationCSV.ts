import {CsvFileProps} from "@/components/common/loaderCSV/interfaces/csv";


export const ValidationCSV=(
    csv:Array<CsvFileProps>,
    setErrorRows:(value: (((prevState: (Set<number> | undefined)) => (Set<number> | undefined)) | Set<number> | undefined)) => void,
    setHeaderValid:(value: (((prevState: boolean) => boolean) | boolean)) => void
)=>{

    const keys=Object.keys(csv[0])

    if(keys.toString()=="email,courseCompletion,courseEngagement,projectDegree,teamProjectDegree,bonusProjectUrls") {
        setHeaderValid(true)

        const errorRows = new Set<number>();
        csv.forEach((row: CsvFileProps, _index) => {
            keys.forEach((key, index) => {
                if (row[keys[index] as keyof CsvFileProps] == undefined) {
                    errorRows.add(_index);
                }
            })
            if(
                isNaN(Number(row.courseCompletion))||
                isNaN(Number(row.courseEngagement))||
                isNaN(Number(row.projectDegree))||
                isNaN(Number(row.teamProjectDegree))
                ){
                errorRows.add(_index);
            }
        })
        setErrorRows(errorRows);



    }
    else {
        setHeaderValid(false)
        const errorRows = new Set<number>();
        setErrorRows(errorRows);
    }

}
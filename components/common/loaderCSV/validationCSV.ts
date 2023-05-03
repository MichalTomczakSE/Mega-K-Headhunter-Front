import {CsvFileProps} from "@/components/common/loaderCSV/interfaces/csv";


const checkValue=(number:Number)=>{
    return !(number >= 0 && number <= 5);
}

export const ValidationCSV=(
    csv:Array<CsvFileProps>,
    setErrorRows:(value: (((prevState: (Set<number> | undefined)) => (Set<number> | undefined)) | Set<number> | undefined)) => void,
    setHeaderValid:(value: (((prevState: boolean) => boolean) | boolean)) => void
)=>{




    const keys=Object.keys(csv[0])
    console.log(csv)
    if(keys.toString()=="email,courseCompletion,courseEngagement,projectDegree,teamProjectDegree,bonusProjectUrls") {
        setHeaderValid(true)

        const errorRows = new Set<number>();
        csv.forEach((row: CsvFileProps, _index) => {
            keys.forEach((key, index) => {
                if (row[keys[index] as keyof CsvFileProps] == '') {
                    errorRows.add(_index);
                }
            })
            let courseCompletion=Number(row.courseCompletion);
            let courseEngagement=Number(row.courseEngagement);
            let projectDegree=Number(row.projectDegree);
            let teamProjectDegree=Number(row.teamProjectDegree);
            if(
                checkValue(courseCompletion)||
                checkValue(courseEngagement)||
                checkValue(projectDegree)||
                checkValue(teamProjectDegree)
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
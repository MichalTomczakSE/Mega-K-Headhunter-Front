import {Header} from "@/components/common/Header";
import {LoaderCSV} from "@/components/common/loaderCSV/loaderCSV";

export default function Home() {
    return (
        <>
            <Header/>
            <section className="bg-primary-background h-[100vh]">
                <div className={"w-36 h-36"}>
                    <LoaderCSV/>
                </div>
            </section>
        </>
    )
}

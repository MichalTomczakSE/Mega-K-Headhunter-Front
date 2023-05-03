import {Header} from "@/components/common/Header";
import {LoaderCSV} from "@/components/common/loaderCSV/loaderCSV";

export default function Admin() {
  return (
    <div>
      <Header/>
      <section className="bg-primary-background w-full h-[100vh]">
        <LoaderCSV/>
      </section>
    </div>
  )
}

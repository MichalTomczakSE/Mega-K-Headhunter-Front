import {Header} from "@/components/common/Header";
import { StudentList } from '@/components/common/student/StudentList';
const TestPage = ()=>  {
  return (
    <>
      <Header/>
      <section className="bg-primary-background h-[100vh]">
        <StudentList status={1}/>
        <hr/>
        <StudentList status={2}/>
      </section>
    </>
  )
}

export default TestPage

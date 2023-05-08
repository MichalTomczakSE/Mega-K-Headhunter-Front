import { useState } from "react";

import { Header } from "@/components/common/Header";
import { LinkComponent } from "@/components/hrInfo/linkHr/linkComponent";
import { Container } from "@/components/hrInfo/hrContainer/Container";
import { SearchStudent } from "@/components/hrInfo/Search/searchStudent";
import { Filter } from "@/components/hrInfo/Filter/Filter";
import { Pagination } from "@/components/hrInfo/Pagination/Pagination";

import { useEffect } from "react";
import { getStudents } from "@/utilis/getStudents";

const ToTalkStudents = () => {
  const [studentsList, setStudentsList] = useState<[]>([]);
  const [studentsCount, setStudentsCount] = useState<number>(0);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(10);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getStudents(currentPage, perPage);
        setStudentsList(data.students);
        setStudentsCount(data.totalStudents);
      } catch (error) {
        console.log(error);
      }
    };
   getData();
  }, [currentPage, perPage, search]);

  return (
    <>
      <div className="w-full px-2">
        <Header />
      </div>
    <Container>
      <div className="  mb-1 flex h-[72px] w-9/12 items-center bg-secondary-background px-2">
        <LinkComponent />
      </div>
      <div className="flex h-3/4  w-9/12 flex-col">
        <div className="flex h-3/4 h-[85px] w-full flex-row items-center justify-between border-b-[3px] border-b-primary-background bg-secondary-background px-2  py-2 text-center ">
          <SearchStudent setSearch={(search) => setSearch(search)} />
          <Filter />
        </div>
        <Pagination
          total={studentsCount ? studentsCount : 0}
          limit={perPage}
          setLimit={(perPage) => setPerPage(perPage)}
          page={currentPage}
          setPage={(currentPage) => setCurrentPage(currentPage)}
        />
      </div>
    </Container>
    </>
  );
};

export default ToTalkStudents;

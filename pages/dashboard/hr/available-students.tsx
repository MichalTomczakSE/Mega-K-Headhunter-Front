import { Container } from '@/components/hrInfo/hrContainer/Container';
import { Header } from '@/components/common/Header';
import { LinkComponent } from '@/components/hrInfo/linkHr/linkComponent';
import { SearchStudent } from '@/components/hrInfo/Search/searchStudent';
import { Filter } from '@/components/hrInfo/Filter/Filter';
import { Pagination } from '@/components/hrInfo/Pagination/Pagination';
import React, { useState } from 'react';
import { FilterForm } from '@/components/filter/FilterForm';
import { StudentList } from '@/components/common/student/StudentList';

const AvailableStudents = () => {
	const [studentsList, setStudentsList] = useState<[]>([]);
	const [studentsCount, setStudentsCount] = useState<number>(0);
	const [search, setSearch] = useState('');
	const [currentPage, setCurrentPage] = useState<number>(0);
	const [perPage, setPerPage] = useState<number>(10);
	return (
		<>
			<Header />
			<Container>
				<div className='flex items-center  w-9/12 h-[72px] px-2 bg-secondary-background mb-1'>
					<LinkComponent />
				</div>
				<div className='flex flex-col h-3/4 w-9/12'>
					<div
						className='py-2 h-[85px] px-2 border-b-primary-background border-b-[3px] flex text-center flex-row justify-between items-center w-full  h-3/4 bg-secondary-background '>
						<SearchStudent setSearch={(search) => setSearch(search)} />
						<div className=''>
							<FilterForm />
						</div>
					</div>
					<StudentList/>

					<Pagination total={studentsCount ? studentsCount : 0} limit={perPage}
											setLimit={perPage => setPerPage(perPage)} page={currentPage}
											setPage={currentPage => setCurrentPage(currentPage)} />
				</div>
			</Container>

		</>
	);
};

export default AvailableStudents;
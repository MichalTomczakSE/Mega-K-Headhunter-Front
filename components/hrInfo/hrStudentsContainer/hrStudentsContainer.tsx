	import {ChangeEvent, useState, useEffect } from 'react';
	import ReactPaginate from 'react-paginate';
	import {getStudents} from "@/components/hrInfo/hrStudentsContainer/getStudents";

	export const HrStudentsContainer = (): JSX.Element => {
		const [studentsList, setStudentsList] = useState<[]>([]);
		const [studentsCount, setStudentsCount] = useState<number>(0);
		const [currentPage, setCurrentPage] = useState<number>(0);
		const [perPage, setPerPage] = useState<number>(10);

		const [search, setSearch] = useState("")


		//useEffect?
		useEffect(() => {
			const getData = async() => {
				try {
					const data = await getStudents(currentPage, perPage)
						setStudentsList(data.students);
						setStudentsCount(data.totalStudents);
				} catch (error) {
					console.log(error);
				}
			};
			getData();
		}, [currentPage, perPage]);

		const handlePageChange = ({ selected }: { selected: number }) => {
			setCurrentPage(selected);
		};

		const handlePerPageChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
			setPerPage(parseInt(target.value));
			setCurrentPage(0);
		};


		return (
				<div className="bg-primary-background shadow-md my-6">
					{/*Here should be component with list of students and props studentsToDisplay*/}
					<div className="px-6 py-4 flex items-center text-light-primary-text gap-2 justify-end">
						<p className="mr-2">Ilość elementów</p>
						<div className="flex-shrink-0">
							<select
								value={perPage}
								onChange={handlePerPageChange}
								className="form-select border border-light-secondary-text bg-light-primary-text text-gray-500 px-3 py-2 text-sm focus:outline-none focus:border-light-secondary-text"
							>
								<option value="10">10</option>
								<option value="25">25</option>
								<option value="50">50</option>
								<option value="100">100</option>
							</select>
					</div>

					<div className=" flex items-center justify-end">
            <span className="text-base text-light-primary-text mr-2">
              Strona
            </span>
						<span className="font-medium mx-1 text-light-primary-text">
							 {currentPage + 1}
            </span>
						<span className="text-sm ">
              z
            </span>
						<span className="font-medium mx-1 ">
							{/*{Math.ceil( studentsCount/perPage) }*/}
							{Math.ceil( 10)}  {/* should be data from BE*/}
            </span>
					</div>
					<ReactPaginate
						// pageCount={Math.ceil(studentsCount / perPage)}
						pageCount={Math.ceil(10)}  // should be data from BE
						pageRangeDisplayed={2}
						marginPagesDisplayed={1}
						previousLabel="&lt;"
						nextLabel="&gt;"
						breakLabel="..."
						onPageChange={handlePageChange}
						containerClassName="px-6 py-4 flex items-center justify-end gap-2"
						pageClassName="bg-dark-secondary-text text-pagination-item py-1.5 px-3 focus:outline-none"
						activeLinkClassName="bg-primary-background text-light-primary-text"
						disabledClassName="bg-light-secondary-text cursor-not-allowed py-1.5 px-3 focus:outline-none"
					/>
				</div>
			</div>
	);
};



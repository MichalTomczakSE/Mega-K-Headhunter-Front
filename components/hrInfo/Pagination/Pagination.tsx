import { ChangeEvent } from "react";

import ReactPaginate from "react-paginate";

interface PaginationProps {
  total: number;
  limit: number;
  setLimit: (limit: number) => void;
  page: number;
  setPage: (page: number) => void;
}

export const Pagination = ({
  total,
  limit,
  setLimit,
  page,
  setPage,
}: PaginationProps) => {
  total = Math.ceil(10);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected);
  };

  const handlePerPageChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(target.value);
    setLimit(newLimit);
    setPage(0);
  };

  return (
    <div className="my-6 min-w-min bg-primary-background shadow-md">
      {/*Here should be component with list of students and props studentsToDisplay*/}
      <div className="flex items-center justify-end gap-2 px-6 py-4 text-light-primary-text">
        <p className="mr-2">Ilość elementów</p>
        <div className="flex-shrink-0">
          <select
            value={limit}
            onChange={handlePerPageChange}
            className="form-select border border-light-secondary-text bg-light-primary-text px-3 py-2 text-sm text-gray-500 focus:border-light-secondary-text focus:outline-none"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

        <div className=" flex items-center justify-end">
          <span className="text-base text-light-primary-text">Strona</span>
          <span className="mx-1 font-medium text-light-primary-text">
            {page + 1}
          </span>
          <span className="text-sm ">z</span>
          <span className="mx-1 font-medium ">
            {/*{Math.ceil( studentsCount/perPage) }*/}
            {Math.ceil(total)} {/* should be data from BE*/}
          </span>
        </div>
        <ReactPaginate
          // pageCount={Math.ceil(studentsCount / perPage)}
          pageCount={Math.ceil(total)} // should be data from BE
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          previousLabel="&lt;"
          nextLabel="&gt;"
          breakLabel="..."
          onPageChange={handlePageChange}
          containerClassName="px-6 py-4 flex items-center justify-end gap-1.5"
          pageClassName="bg-dark-secondary-text text-pagination-item py-1.5 px-1 focus:outline-none"
          activeLinkClassName="bg-primary-background text-light-primary-text"
          disabledClassName="bg-light-secondary-text cursor-not-allowed py-1.5 px-3 focus:outline-none"
        />
      </div>
    </div>
  );
};

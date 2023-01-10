import { IPagination } from "../types";

export const Pagination = ({ page, setPage, totalPage }: IPagination) => (
  <nav
    className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
    aria-label="Pagination"
  >
    <div className="hidden sm:block">
      <p className="text-sm text-gray-700">
        {totalPage === 0 ? (
          <>No results</>
        ) : (
          <>
            Showing <span className="font-medium">{page} </span> of&nbsp;
            <span className="font-medium">{totalPage}</span> pages
          </>
        )}
      </p>
    </div>
    <div className="flex flex-1 justify-between sm:justify-end">
      <button
        disabled={page === 1 || totalPage == 0 ? true : false}
        onClick={() => {
          if (page - 1 > 0) setPage(page - 1);
        }}
        className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
      >
        Previous
      </button>
      <button
        disabled={page === totalPage || totalPage == 0 ? true : false}
        onClick={() => {
          if (page < totalPage) setPage(page + 1);
        }}
        className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50
        `}
      >
        Next
      </button>
    </div>
  </nav>
);

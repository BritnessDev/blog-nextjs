import { ICategoryList } from "../types";
export const CategoryOpt = ({
  categoryList,
  keyword,
  setKeyword,
  categoryId,
  setCategoryId,
}: ICategoryList) => {
  return (
    <>
      <div className="mx-auto relative w-3/4">
        <div className="relative flex items-center md:w-1/4 w-2/4 h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border-b border-solid border-[lightgrey] rounded-b-none">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search something.."
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
        </div>
      </div>
      <select
        className="px-4 py-3 md:w-1/4 w-2/4 rounded-md bg-white border-transparent focus:outline-none focus:border-gray-500 focus:ring-0 text-sm text-gray-600 border-b border-solid border-[lightgrey] rounded-b-none"
        value={categoryId}
        onChange={(e) => setCategoryId(parseInt(e.target.value))}
      >
        <option value={-1}>All Type</option>
        {categoryList &&
          categoryList.map((item, key) => (
            <option key={key} value={item.id}>
              {item.name}
            </option>
          ))}
      </select>
    </>
  );
};

import SearchIcon from "@heroicons/react/outline/SearchIcon"
const Search = () => {
    return (
        <div className="flex lg:ml-6">
            <span className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <SearchIcon className="w-6 h-6" aria-hidden="true" />
            </span>
        </div>
    )
}
export default Search
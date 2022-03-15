import MenuIcon from "@heroicons/react/outline/MenuIcon"
interface IPropsButtonMenu {
    onClick: () => void
}
const ButtonMenu = ({onClick}: IPropsButtonMenu ) => {
    return (
        <button
            type="button"
            className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
            onClick={onClick}
        >
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>
    )
}
export default ButtonMenu
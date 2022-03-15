interface IPropsLanguage {
  isMobile?: boolean
}
const Language = ({isMobile = false}: IPropsLanguage) => {
  return (
    isMobile ? (
      <div className="hidden lg:ml-8 lg:flex">
        <span className="text-gray-700 hover:text-gray-800 flex items-center">
          <img
            src="https://tailwindui.com/img/flags/flag-canada.svg"
            alt=""
            className="w-5 h-auto block flex-shrink-0"
          />
          <span className="ml-3 block text-sm font-medium">
            CAD
          </span>
          <span className="sr-only">, change currency</span>
        </span>
      </div>
    )
  :
    (
      <div className="border-t border-gray-200 py-6 px-4">
        <span className="-m-2 p-2 flex items-center">
          <img
            src="https://tailwindui.com/img/flags/flag-canada.svg"
            alt=""
            className="w-5 h-auto block flex-shrink-0"
          />
          <span className="ml-3 block text-base font-medium text-gray-900">
            CAD
          </span>
          <span className="sr-only">, change currency</span>
        </span>
      </div>
    )
  )
}
export default Language
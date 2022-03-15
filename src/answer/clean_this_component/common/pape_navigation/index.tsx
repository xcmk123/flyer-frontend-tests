const PageNavigation = ({isMobile = false, ...props}: any) => {
  return (
    !isMobile ? (
      <a
        key={props.name}
        href={props.href}
        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
      >
        {props.name}
      </a>
    )
  :
    (
      <div 
        className="flow-root"
      >
        <a
          href={props.href}
          className="-m-2 p-2 block font-medium text-gray-900"
        >
          {props.name}
        </a>
      </div>
    )
  )
}
export default PageNavigation
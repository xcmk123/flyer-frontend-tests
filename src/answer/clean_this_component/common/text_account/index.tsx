interface IPropsTextAccount {
  title: string
  isMobile?: boolean
}

const TextAccount = ({title, isMobile = false}: IPropsTextAccount) => {
  return (
    isMobile ? (
      <div className="flow-root">
        <span className="-m-2 p-2 block font-medium text-gray-900">
          {title}
        </span>
      </div>
    )
  :
    (
      <span className="text-sm font-medium text-gray-700 hover:text-gray-800">
        {title}
      </span>
    )
  )
}
export default TextAccount
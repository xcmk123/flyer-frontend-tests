interface IPropsSection {
  section: any
  categoryId?: string
  isMobile? : boolean
}

const Section = ({ section, categoryId, isMobile = false }: IPropsSection) => {
  return (
    isMobile ? (
      <div>
        <p 
          id={`${section.name}-heading`}
          className="font-medium text-gray-900"
        >
          {section.name}
        </p>
        <ul
          aria-labelledby={`${section.name}-heading`}
          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
        >
          {section.items.map((item: any) => (
            <li key={item.name} className="flow-root">
              <a 
                href={item.href} 
                className="-m-2 p-2 block text-gray-500"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  :
    (
      <div>
        <p 
          id={`${section.name}-heading`}
          className="font-medium text-gray-900"
        >
          {section.name}
        </p>
        <ul
          aria-labelledby={`${categoryId}-${section.id}-heading-mobile`}
          className="mt-6 flex flex-col space-y-6"
        >
          {section.items.map((item: any) => (
            <li key={item.name} className="flex">
              <a 
                href={item.href} 
                className="hover:text-gray-800"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
export default Section;

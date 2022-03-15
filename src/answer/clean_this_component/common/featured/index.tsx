const Featured = ({ item }: any) => {
  return (
    <div key={item.name} className="group relative text-base sm:text-sm">
      <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
        <img
          src={item.imageSrc}
          alt={item.imageAlt}
          className="object-center object-cover"
        />
      </div>
      <a href={item.href} className="mt-6 block font-medium text-gray-900">
        <span className="absolute z-10 inset-0" aria-hidden="true" />
        {item.name}
      </a>
      <p aria-hidden="true" className="mt-1">
        Shop now
      </p>
    </div>
  );
};
export default Featured;

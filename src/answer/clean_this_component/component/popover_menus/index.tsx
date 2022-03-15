import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Featured from "../../common/featured";
import Section from "../../common/section";
import { classNames } from "../../method/classNames";
import PageNavigation from "../../common/pape_navigation";

const PopoverMenus = ({ navigation }: any) => {
  return (
    <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
      <div className="h-full flex space-x-8">
        {navigation.categories.map((category: any) => (
          <Popover key={category.name} className="flex">
            {({ open }) => (
              <>
                <div className="relative flex">
                  <Popover.Button
                    className={classNames(
                      open
                        ? "border-indigo-600 text-indigo-600"
                        : "border-transparent text-gray-700 hover:text-gray-800",
                      "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                    )}
                  >
                    {category.name}
                  </Popover.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                    <div
                      className="absolute inset-0 top-1/2 bg-white shadow"
                      aria-hidden="true"
                    />
                    <div className="relative bg-white">
                      <div className="max-w-7xl mx-auto px-8">
                        <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                          <div className="col-start-2 grid grid-cols-2 gap-x-8">
                            {category.featured.map((item: any) => (
                              <Fragment key={item.name}>
                                <Featured item={item} />
                              </Fragment>
                            ))}
                          </div>
                          <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                            {category.sections.map((section: any) => (
                              <Fragment key={section.name}>
                                <Section section={section} />
                              </Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}
        {navigation.pages.map((page: any) => 
          <Fragment key={page.name}>
            <PageNavigation {...page} />
          </Fragment>
        )}
      </div>
    </Popover.Group>
  );
};
export default PopoverMenus;

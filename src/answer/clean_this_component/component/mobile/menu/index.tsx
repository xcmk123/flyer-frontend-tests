import { Dialog, Tab } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import Featured from "../../../common/featured";
import Section from "../../../common/section";
import { navigation } from "../../../constant";
import { classNames } from "../../../method/classNames";
import Language from "../../../common/language";
import PageNavigation from "../../../common/pape_navigation";
import TextAccount from "../../../common/text_account";

const Menu = ({ open, setOpen }: any) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 flex z-40 lg:hidden"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
            <div className="px-4 pt-5 pb-2 flex">
              <button
                type="button"
                className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            {/* Links */}
            <Tab.Group as="div" className="mt-2">
              <div className="border-b border-gray-200">
                <Tab.List className="-mb-px flex px-4 space-x-8">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? "text-indigo-600 border-indigo-600"
                            : "text-gray-900 border-transparent",
                          "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                        )
                      }
                    >
                      {category.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
                {navigation.categories.map((category) => (
                  <Tab.Panel
                    key={category.name}
                    className="pt-10 pb-8 px-4 space-y-10"
                  >
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <Fragment key={item.name}>
                          <Featured item={item} />
                        </Fragment>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <Fragment key={section.name}>
                        <Section section={section} categoryId={category.id} isMobile />
                      </Fragment>
                    ))}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
              {navigation.pages.map((page) => (
                <Fragment key={page.name}>
                  <PageNavigation isMobile {...page} />
                </Fragment>
              ))}
            </div>
            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
              <TextAccount title="Sign in" />
              <TextAccount title="Create account" />
            </div>
            <Language isMobile={true} />
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
    );
};
export default Menu;

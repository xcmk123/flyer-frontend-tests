import { useState, Suspense } from 'react';
import TextAccount from './common/text_account';
import Cart from './component/cart';
import Logo from './component/logo';
import ButtonMenu from './component/mobile/button';
import Menu from './component/mobile/menu';
import PopoverMenus from './component/popover_menus';
import Search from './component/search';
import { navigation } from './constant';


export default function CleanThisComponent() {
  const [open, setOpen] = useState(false);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <p className="mb-2 text-center">
        Clean this larger component, only split to smaller components, no need changing the css
        classes.
      </p>
      <div className="bg-white">
        <Menu 
          open={open}
          setOpen={setOpen}
        />
        <header className="relative bg-white">
          <p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
            Get free delivery on orders over $100
          </p>
          <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <div className="h-16 flex items-center">
                {/* button-menu of screen mobile */}
                <ButtonMenu onClick={() => setOpen(true)} />
                <Logo />
                <PopoverMenus navigation={navigation} />
                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <TextAccount title="Sign in" />
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <TextAccount title="Create account" />
                  </div>
                  <Search />
                  <Cart />
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </Suspense>
  );
}

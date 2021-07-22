import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";

const navigation = ["Why FAMO", "Use Cases", "Benefits", "Pricing"];

export default function NavBar() {
  return (
    <div>
      <Disclosure
        as="nav"
        className="bg-gradient-to-b from-pink-100 to-pink-200 pt-3 pb-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a
                href="/#"
                className=" text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-purple-400"
              >
                famo
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {navigation.map((item) => (
                  <Fragment key={item}>
                    <a href="/#" className="text-gray-900 px-3 py-2">
                      {item}
                    </a>
                  </Fragment>
                ))}
              </div>
            </div>
            <div>
              <a
                href="/#"
                className="bg-transparent text-gray-900 py-2 px-3 border border-black rounded-xl"
              >
                Get early access
              </a>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

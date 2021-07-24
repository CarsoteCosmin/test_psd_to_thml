import { Fragment } from "react";

const navigation = ["Why FAMO", "Use Cases", "Pricing", "Contact"];

export default function Footer() {
  return (
    <div>
      <div>
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
            <div>
              <p>&copy; 2021 AdoreMe, All Rights Reserved</p>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-2">
                {navigation.map((item) => (
                  <Fragment key={item}>
                    <a href="/#" className="text-gray-900 px-3 py-2">
                      {item}
                    </a>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

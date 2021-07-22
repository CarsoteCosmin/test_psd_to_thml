import { Fragment } from "react";

import Icon from "@mdi/react";
import {
  mdiBell,
  mdiViewGrid,
  mdiMagnify,
  mdiClockTimeThreeOutline,
  mdiClockTimeFour,
  mdiClipboardOutline,
} from "@mdi/js";
const navigation = [
  {
    icon: mdiViewGrid,
    name: "Overview",
  },
  {
    icon: mdiMagnify,
    name: "Discover",
  },
  {
    icon: mdiClockTimeThreeOutline,
    name: "Schedule",
  },
  {
    icon: mdiClockTimeFour,
    name: "History",
  },
  {
    icon: mdiClipboardOutline,
    name: "Events",
  },
];

export default function Main() {
  return (
    <main className=" h-screen bg-gradient-to-b from-blue-100 via-green-200  to-white flex items-center justify-center">
      <div className="h-4/5 w-3/4 bg-white rounded-xl align-top">
        <div className="bg-gray-200 h-8 w-full rounded-t-xl flex align-middle justify-start items-center">
          <div class="bg-red-500 w-3 h-3 rounded-full ml-4"></div>
          <div class="bg-yellow-500 w-3 h-3 rounded-full ml-2"></div>
          <div class="bg-green-500 w-3 h-3 rounded-full ml-2"></div>
        </div>
        <div>
          <div as="nav" className="bg-white pt-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-around h-16">
                <div>
                  <a
                    href="/#"
                    className=" text-3xl font-extralight text-transparent bg-clip-text bg-red-900"
                  >
                    ADOREME
                  </a>
                </div>
                <div className="hidden md:block">
                  <div className="flex items-baseline space-x-2">
                    {navigation.map((item) => (
                      <Fragment key={item.name}>
                        <div className="pr-6 py-2 flex items-baseline space-x-2">
                          <Icon path={item.icon} className="h-3 w-3" />
                          <a href="/#" className="text-gray-900">
                            {item.name}
                          </a>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="p-1 rounded-full text-gray-400 focus:outline-none mr-3 ">
                    <span className="sr-only">View notifications</span>
                    <Icon path={mdiBell} size={1} />
                  </button>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/images.jpg?alt=media&token=2123c007-5bf9-465e-8b3f-1d2928f1fdf0"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

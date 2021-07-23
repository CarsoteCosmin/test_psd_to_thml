import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Icon from "@mdi/react";
import {
  mdiBell,
  mdiViewGrid,
  mdiMagnify,
  mdiClockTimeThreeOutline,
  mdiClockTimeFour,
  mdiClipboardOutline,
  mdiChevronDown,
  mdiFilterVariant,
  mdiPlusThick,
  mdiDotsHorizontal,
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
const sort_by = ["1", "2", "3", "4"];
const type = ["5", "6", "7", "8"];
const all_categories = ["9", "10", "11", "12"];
const cards = [
  {
    posted: "14 mins ago",
    url_profile:
      "https://firebasestorage.googleapis.com/v0/b/faststartup.appspot.com/o/images.jpg?alt=media&token=2123c007-5bf9-465e-8b3f-1d2928f1fdf0",
    text: "It's time for summer refresh, mamma!",
    time_left: "2 Days left",
  },
  {
    posted: "15 mins ago",
    url_profile: "url",
    text: "It's time for summer refresh, mamma!",
    time_left: "6 Days left",
  },
  {
    posted: "16 mins ago",
    url_profile: "url",
    text: "It's time for summer refresh, mamma!",
    time_left: "6 Days left",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Main() {
  return (
    <main className=" h-screen bg-gradient-to-b from-blue-100 via-green-200  to-gray-200 flex items-center justify-center pt-16">
      <div className="h-full w-3/4 bg-white rounded-xl align-top shadow-lg">
        <div className="bg-gray-200 h-8 w-full rounded-t-xl flex align-middle justify-start items-center">
          <div className="bg-red-500 w-3 h-3 rounded-full ml-4"></div>
          <div className="bg-yellow-500 w-3 h-3 rounded-full ml-2"></div>
          <div className="bg-green-500 w-3 h-3 rounded-full ml-2"></div>
        </div>
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
                <div className="flex items-baseline space-x-6">
                  {navigation.map((item) => (
                    <Fragment key={item.name}>
                      <div className="pr-6 py-2 flex items-baseline">
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
        <div className="w-full pt-6 px-16 h-1/6">
          <div className="flex">
            <p className="text-3xl font-semibold text-blue-900 pl-4">
              Discover
            </p>
          </div>
          <div className="flex">
            <p className="text-xs font-light text-gray-500 pl-4">
              32 capmaings available for you to explore
            </p>
          </div>
        </div>
        <div className="bg-gray-100 px-16 justify-items-start mx-2 h-4/6 rounded-b-lg">
          <div className="w-full h-1/6">
            <div className="flex items-center">
              <div className="flex justify-start w-3/4 space-x-4">
                <Menu as="div" className="relative inline-block text-center">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="inline-flex align-middle justify-between w-full rounded-xl shadow-sm ml-1 py-2 bg-gray-200 hover:bg-gray-300">
                          <div className="inline-flex ml-3">
                            <h1 className="text-gray-500 text-sm font-light">
                              Sort by:&nbsp;
                            </h1>
                            <h1 className="text-gray-900 text-sm font-medium">
                              Popular
                            </h1>
                          </div>
                          <Icon
                            path={mdiChevronDown}
                            className="h-5 w-5 mr-3"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <div className="py-1">
                            {sort_by.map((item) => (
                              <Fragment key={item}>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="/#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      {item}
                                    </a>
                                  )}
                                </Menu.Item>
                              </Fragment>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
                <Menu as="div" className="relative inline-block text-center">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="inline-flex align-middle justify-between w-full rounded-xl shadow-sm mx-3 py-2 bg-gray-200 hover:bg-gray-300">
                          <div className="inline-flex ml-3">
                            <h1 className="text-gray-500 text-sm font-light">
                              Type:&nbsp;
                            </h1>
                            <h1 className="text-gray-900 text-sm font-medium">
                              All
                            </h1>
                          </div>
                          <Icon
                            path={mdiChevronDown}
                            className="h-5 w-5 mr-3"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <div className="py-1">
                            {type.map((item) => (
                              <Fragment key={item}>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="/#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      {item}
                                    </a>
                                  )}
                                </Menu.Item>
                              </Fragment>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
                <Menu as="div" className="relative inline-block text-center">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="inline-flex align-middle justify-between w-full rounded-xl shadow-sm mx-3 py-2 bg-gray-200 hover:bg-gray-300">
                          <div className="inline-flex ml-3">
                            <h1 className="text-gray-900 text-sm font-medium">
                              All Categories
                            </h1>
                          </div>
                          <Icon
                            path={mdiChevronDown}
                            className="h-5 w-5 mr-3"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <div className="py-1">
                            {all_categories.map((item) => (
                              <Fragment key={item}>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="/#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      {item}
                                    </a>
                                  )}
                                </Menu.Item>
                              </Fragment>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
              <div className="flex justify-end w-1/4">
                <div className="flex align-middle space-x-3">
                  <a href="/#">
                    <Icon
                      className="w-16 h-10 bg-gray-200 rounded-xl py-2 px-3"
                      path={mdiMagnify}
                    />
                  </a>
                  <a href="/#">
                    <Icon
                      className="w-16 h-10 bg-gray-200 rounded-xl py-2 px-3"
                      path={mdiFilterVariant}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full h-full flex align-middle justify-between space-x-7">
            {cards.map((item) => (
              <Fragment key={item.posted}>
                <div className="w-2/6 h-4/5 bg-white rounded-xl">
                  <div className="w-full h-1/5 flex items-center justify-items-start pl-5">
                    <img
                      className="h-8 w-8 rounded-full"
                      src={item.url_profile}
                      alt=""
                    />
                    <div className="w-full">
                      <div className="flex pl-3">
                        <p className="text-gray-900 font-medium pr-6">
                          H&amp;M
                        </p>
                        <div className="flex pl-16">
                          <Icon
                            path={mdiPlusThick}
                            className="h-6 w-4 text-red-900"
                          />
                          <a href="/#" className="text-red-900 pr-4">
                            Follow
                          </a>
                          <Icon
                            path={mdiDotsHorizontal}
                            className="h-6 w-4 text-gray-400"
                          />
                        </div>
                      </div>
                      <div className="flex pl-3">
                        <p className="text-gray-900 font-light text-xs">
                          {item.posted}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex align-middle justify-center">
                    <img
                      className="rounded-lg bg-contain h-44 w-64"
                      src={item.url_profile}
                      alt=""
                    />
                  </div>
                  <div className="w-full text-left pl-6 pt-3">
                    <p className="text-gray-900 font-bold text-md  w-3/5">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

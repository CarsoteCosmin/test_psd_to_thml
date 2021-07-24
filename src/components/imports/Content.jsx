import {
  mdiSlack,
  mdiBullseyeArrow,
  mdiRocketLaunchOutline,
  mdiBitcoin,
  mdiPlusThick,
  mdiDotsHorizontal,
  mdiClockTimeThreeOutline,
} from "@mdi/js";
import Icon from "@mdi/react";

export default function Content() {
  return (
    <div className="w-full grid grid-cols-1 divide-y divide-gray-300">
      <div className="p-16 w-full flex align-middle justify-around bg-gradient-to-b from-gray-200 to-white">
        <div className="pt-16 pb-4 flex">
          <Icon path={mdiSlack} size={2} />
          <p className="font-extrabold text-4xl text-gray-900">slack</p>
        </div>
        <div className="pt-16 pb-4">
          <p className="font-extrabold text-4xl text-gray-900">GeekWire</p>
        </div>
        <div className="pt-16 pb-4">
          <p className="font-extrabold text-4xl text-gray-900">Forbes</p>
        </div>
        <div className="pt-16 pb-4">
          <p className="font-extrabold text-4xl text-gray-900">USATODAY</p>
        </div>
        <div className="pt-16 pb-4">
          <p className="font-extrabold text-4xl text-gray-900">envato</p>
        </div>
      </div>
      <div className="w-full pb-16">
        <div className="w-full flex align-middle justify-evenly p-16">
          <div className="w-1/3">
            <div className="w-full flex align-middle justify-center">
              <Icon
                path={mdiBullseyeArrow}
                size={5}
                className="text-blue-500"
              />
            </div>
            <div className="pt-12 text-gray-900">
              <p className="font-bold text-3xl">
                Manage thousands of collaborations easly
              </p>
              <p className="pt-6 text-gray-900 text-lg font-medium">
                With lots of unique blocks, you can easily
                <br />
                build a page without coding. Build your <br />
                next website within few minutes.
              </p>
            </div>
          </div>
          <div className="w-1/3 px-11">
            <div className="w-full flex align-middle justify-center">
              <Icon path={mdiBitcoin} size={5} className="text-yellow-500" />
            </div>
            <div className="pt-12 text-gray-900">
              <p className="font-bold text-3xl">
                Reach to millions of people in just a few clicks
              </p>
              <p className="pt-6 text-gray-900 text-lg font-medium">
                With lots of unique blocks, you can easily
                <br />
                build a page without coding. Build your <br />
                next website within few minutes.
              </p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="w-full flex align-middle justify-center">
              <Icon
                path={mdiRocketLaunchOutline}
                size={5}
                className="text-red-500"
              />
            </div>
            <div className="pt-12 text-gray-900">
              <p className="font-bold text-3xl">
                Get as much on content brand content as you need
              </p>
              <p className="pt-6 text-gray-900 text-lg font-medium">
                With lots of unique blocks, you can easily
                <br />
                build a page without coding. Build your <br />
                next website within few minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen px-16">
        <div className="w-full h-full flex mt-16">
          <div className="h-full w-3/6 pt-16">
            <div>
              <p className="text-gray-900 flex justify-center font-semibold text-4xl text-left">
                Create brand <br /> awarness, content <br /> or sales campaign
                at
                <br /> any scale powered by <br /> your community
              </p>
              <p className="pt-6 text-left text-gray-900 flex justify-center">
                Make things faster. Pin tabs to automatically
                <br />
                open wbsites you use the most.
              </p>
            </div>
          </div>
          <div className="h-full w-3/6 mt-16">
            <div className="h-3/4 w-full flex align-middle justify-center">
              <div className="w-3/6 h-3/4 bg-white rounded-xl shadow-lg">
                <div className="w-full h-1/5 flex items-center justify-items-start pl-5">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
                    alt=""
                  />
                  <div className="w-full">
                    <div className="flex pl-3">
                      <p className="text-gray-900 font-medium pr-6">H&amp;M</p>
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
                        14 mins ago
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex align-middle justify-center">
                  <img
                    className="rounded-lg bg-contain h-44 w-64"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
                    alt=""
                  />
                </div>
                <div className="w-full text-left pl-6 pt-3">
                  <p className="text-gray-900 font-bold text-md w-3/5">
                    It's time for summer refresh, mamma!
                  </p>
                </div>
                <div className="w-full flex align-middle justify-between px-6 pt-1">
                  <img
                    className="h-6 w-6 rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
                    alt=""
                  />
                  <div className="flex space-x-1 bg-yellow-200 rounded-xl px-2">
                    <Icon className="h-6 w-4" path={mdiClockTimeThreeOutline} />
                    <p>2 Days left</p>
                  </div>
                </div>
                <div className="w-full flex align-middle justify-center mt-4 text-white">
                  <button
                    href="/#"
                    className=" w-5/6 h-10 bg-red-900 rounded-2xl"
                  >
                    Read more &amp; Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-screen px-16">
          <div className="w-full h-full flex mt-16 px-16">
            <div className="h-full w-3/6 mt-16">
              <div className=" h-2/4 w-3/4 bg-gray-200 flex items-center justify-center">
                <div className="h-2/6 w-3/5 bg-white rounded-xl flex">
                  {/* <div className="h-full w-1/5 pt-3 pl-3">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
                      alt=""
                    />
                  </div>
                  <div className="h-2/6 w-full flex justify-start items-center">
                    <p>Christina Johnson</p>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="h-full w-3/6 pt-16">
              <div>
                <p className="text-gray-900 flex justify-center font-semibold text-4xl text-left">
                  Build meaningful <br />
                  &amp; long lasting <br /> relationship with your <br /> brand
                  ambassadors
                </p>
                <p className="pt-6 text-left text-gray-900 flex justify-center">
                  Make things faster. Pin tabs to automatically
                  <br />
                  open wbsites you use the most.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-screen px-16">
          <div className="w-full h-full flex mt-16">
            <div className="h-full w-3/6 pt-16">
              <div>
                <p className="text-gray-900 flex justify-center font-semibold text-4xl text-left">
                  Manage thousands of <br /> colaborations easily
                </p>
                <p className="pt-6 text-left text-gray-900 flex justify-center">
                  Make things faster. Pin tabs to automatically
                  <br />
                  open wbsites you use the most.
                </p>
              </div>
            </div>
            <div className="h-full w-3/6 mt-16">
              <div className=" h-2/4 w-3/4 bg-gray-200 flex items-center justify-center">
                <div className="h-2/6 w-3/5 bg-white rounded-xl flex">
                  {/* <div className="h-full w-1/5 pt-3 pl-3">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
                      alt=""
                    />
                  </div>
                  <div className="h-2/6 w-full flex justify-start items-center">
                    <p>Christina Johnson</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-screen px-16">
          <div className="w-full h-full flex mt-16">
            <div className="h-full w-3/6 pt-16">
              <div>
                <div className="flex items-center justify-start pl-16 ml-10">
                  <img
                    className="h-8 w-8 rounded-full flex justify-center"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
                    alt=""
                  />
                </div>

                <p className="pt-6 text-left text-gray-900 flex justify-center">
                  "Right in the city center, it is walking
                  <br />
                  distance to everything you might want to
                  <br />
                  visit. Cristian is very friendly and always
                  <br />
                  super responsive to any query.
                  <br />
                  One of the best stays that i ever
                  <br />
                  experienced, I strongly recommend
                  <br />
                  it to everyone!
                </p>
                <p className="text-gray-900 text-sm flex justify-center">
                  Lesya Borodina &nbsp;&#8228;Brand Manager&#8228; H&amp;M
                </p>
              </div>
            </div>
            <div className="h-full w-3/6 mt-16">
              <div className=" h-2/4 w-3/4 bg-gray-200 flex items-center justify-center">
                <div className="h-2/6 w-3/5 bg-white rounded-xl flex">
                  {/* <div className="h-full w-1/5 pt-3 pl-3">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
                      alt=""
                    />
                  </div>
                  <div className="h-2/6 w-full flex justify-start items-center">
                    <p>Christina Johnson</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

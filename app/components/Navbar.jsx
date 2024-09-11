"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  }
  return (
    <div className="drawer sticky top-0 z-50  ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full lg:px-20 ">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className='flex justify-between w-full'>
            <div className="mx-2 px-2">
              <span onClick={handleClick} className="cursor-pointer">
                Cure Med City
              </span>
            </div>

            <div className="hidden lg:block">
              <ul className="menu menu-horizontal text-lg">
                {/* Navbar menu content here */}
                <li><a>Home</a></li>
                <li><a>Reports</a></li>
                <li><a>History</a></li>
                <li><a>Doctors</a></li>
                <li><a>TeleHealth Consultation</a></li>
              </ul>
            </div>
            <div>
              <label className="grid cursor-pointer place-items-center">
                <input
                  type="checkbox"
                  value="synthwave"
                  className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                <svg
                  className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path
                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <svg
                  className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li><a>Home</a></li>
          <li><a>Reports</a></li>
          <li><a>History</a></li>
          <li><a>Doctors</a></li>
          <li><a>TeleHealth Consultation</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

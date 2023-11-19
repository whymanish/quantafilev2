'use client'
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header>
        <input
          type="checkbox"
          name="hbr"
          id="hbr"
          className="hbr peer absolute -left-full" // Set off-screen to hide without affecting the layout
          aria-hidden="true"
          checked={isMobileMenuOpen}
          onChange={toggleMobileMenu}
        />
        <nav className={`fixed z-20  w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 ${isMobileMenuOpen ? 'peer-checked:navbar-active' : ''} md:relative md:bg-transparent dark:shadow-none`}>
          <div className="xl:container m-auto px-6">
            <div className="flex flex-wrap justify-center items-center  gap-6 md:py-3 md:gap-0">
              <div className="w-full flex justify-between items-center lg:w-auto lg:pl-4">
                <a href="#" aria-label="logo" className="flex space-x-2 items-center">
                  <div aria-hidden="true" className="flex space-x-1">
                    <div aria-hidden="true" class="flex space-x-1">
                      <div class="h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-200"></div>
                      <div class="h-6 w-2 bg-blue-400 dark:bg-primaryLight"></div>
                    </div>
                    <span class="text-base font-bold text-gray-600 dark:text-white">Quantafile</span>                  </div>
                </a>
                <label
                  htmlFor="hbr"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  {isMobileMenuOpen ? (
                    <div
                      aria-hidden="true"
                      className="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transform -rotate-45 translate-x-1 translate-y-1 transition duration-300"
                    ></div>
                  ) : (
                    <>
                      <div
                        aria-hidden="true"
                        className="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                      ></div>
                      <div
                        aria-hidden="true"
                        className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
                      ></div>
                    </>
                  )}
                </label>
              </div>
              <div className={`navmenu ${isMobileMenuOpen ? 'block' : 'hidden'} w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0`}>
                <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                  <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>Portfolio</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                      >
                        <span>Services</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                  <a
                    href="#"
                    className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span className="relative text-sm font-semibold text-primary dark:text-primaryLight">
                      Sign Up
                    </span>
                  </a>
                  <a
                    href="#"
                    className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span className="relative text-sm font-semibold text-gray-600 dark:text-gray-900">
                      Login
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

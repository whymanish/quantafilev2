import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="w-full bg-gray-100 dark:bg-gray-900 py-16">
        <div class="md:px-12 lg:px-28">
          <div class="container m-auto space-y-6 text-gray-600 dark:text-gray-300">
            <div aria-hidden="true" className="flex justify-center space-x-1">
                <div class="h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-200"></div>
                <div class="h-6 w-2 bg-blue-400 dark:bg-primaryLight"></div>
              <span class="text-base font-bold text-gray-600 dark:text-white">
                Quantafile
              </span>{" "}
            </div>{" "}
            <ul
              role="list"
              class="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
            >
              <li role="listitem">
                <a href="#" class="hover:text-primary">
                  Home
                </a>
              </li>
              <li role="listitem">
                <a href="#" class="hover:text-primary">
                  Features
                </a>
              </li>
              <li role="listitem">
                <a href="#" class="hover:text-primary">
                  Get started
                </a>
              </li>
              <li role="listitem">
                <a href="#" class="hover:text-primary">
                  About us
                </a>
              </li>
            </ul>
            <div class="m-auto flex w-max items-center justify-between space-x-4">
              <a href="tel:+243996660436" aria-label="call">
              <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
              </a>
              <a href="mailto:hello@mail.com" aria-label="send mail">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="m-auto w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
                </svg>
              </a>
             
             
            </div>
            <div class="text-center">
              <span class="text-sm tracking-wide">
                Copyright © Quantafile <span id="year"></span> | All right
                reserved
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

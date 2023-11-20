import React from 'react'

const Hero = () => {
  return (
    <div>

      <div className="mb-16">
        <div className="bg-gray-100">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-400">
                  Brand new
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">The</span>
                </span>{' '}
                Quantafile brings something special for you !
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
               abhi aise immediately nhi soche hai pr sochenge
              </p>
            </div>
            <div className="flex items-center sm:justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded-xl shadow-md bg-indigo-700 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </button>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="relative px-4 sm:px-0">
          <div className="absolute inset-0 bg-gray-100 h-1/2" />
          <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded-xl shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full ">
                <svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z" fill="#050D42" /><path d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z" fill="#050D42" /><path d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z" fill="#050D42" /><path d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z" fill="#2F4BFF" /></svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Make it better
              </p>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full">
              <svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M500.8 766.4c8 4.8 11.2 14.4 6.4 22.4s-14.4 11.2-22.4 6.4l-176-96c-8-4.8-11.2-14.4-6.4-22.4 4.8-8 14.4-11.2 22.4-6.4l176 96z" fill="#050D42" /><path d="M652.8 460.8v-32c57.6 0 86.4 89.6 64 188.8-22.4 96-134.4 179.2-224 179.2v-32c75.2 0 174.4-73.6 192-155.2 19.2-81.6-3.2-148.8-32-148.8zM316.8 908.8h352c9.6 0 16 6.4 16 16s-6.4 16-16 16h-352c-9.6 0-16-6.4-16-16s6.4-16 16-16z" fill="#050D42" /><path d="M652.8 94.4c46.4 27.2 62.4 84.8 35.2 131.2L528 502.4l-166.4-96 160-276.8c25.6-46.4 84.8-60.8 131.2-35.2z" fill="#2F4BFF" /><path d="M336 428.8c-9.6-6.4-14.4-17.6-11.2-24s16-9.6 27.2-3.2l184 107.2c9.6 6.4 14.4 17.6 11.2 24-4.8 8-16 9.6-27.2 3.2L336 428.8z" fill="#050D42" /><path d="M358.4 443.2l139.2 80-24 41.6c-4.8 8-14.4 9.6-22.4 6.4l-110.4-64c-8-4.8-9.6-14.4-6.4-22.4l24-41.6z" fill="#2F4BFF" /><path d="M652.8 444.8m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" fill="#2F4BFF" /><path d="M476.8 828.8v96h32v-96z" fill="#050D42" /><path d="M492.8 780.8m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#2F4BFF" /></svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Do it faster
              </p>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full ">
               <svg width="800px" height="800px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M608 156.8c4.8 1.6 6.4 4.8 6.4 9.6l-28.8 108.8c-1.6 4.8-4.8 6.4-9.6 6.4-4.8-1.6-6.4-4.8-6.4-9.6l28.8-108.8c0-4.8 4.8-8 9.6-6.4zM867.2 416c1.6 4.8-1.6 8-6.4 9.6L752 454.4c-4.8 1.6-8-1.6-9.6-6.4-1.6-4.8 1.6-8 6.4-9.6l108.8-28.8c4.8 0 8 3.2 9.6 6.4z m-94.4 356.8c-3.2 3.2-8 3.2-11.2 0l-78.4-78.4c-3.2-3.2-3.2-8 0-11.2 3.2-3.2 8-3.2 11.2 0l78.4 78.4c3.2 3.2 3.2 8 0 11.2zM416 867.2c-4.8-1.6-6.4-4.8-6.4-9.6l28.8-108.8c1.6-4.8 4.8-6.4 9.6-6.4 4.8 1.6 6.4 4.8 6.4 9.6l-28.8 108.8c0 4.8-4.8 8-9.6 6.4zM156.8 608c-1.6-4.8 1.6-8 6.4-9.6l108.8-28.8c4.8-1.6 8 1.6 9.6 6.4 1.6 4.8-1.6 8-6.4 9.6l-108.8 28.8c-4.8 0-8-3.2-9.6-6.4z m94.4-356.8c3.2-3.2 8-3.2 11.2 0l78.4 78.4c3.2 3.2 3.2 8 0 11.2s-8 3.2-11.2 0l-78.4-78.4c-3.2-3.2-3.2-8 0-11.2z" fill="#050D42" /><path d="M355.2 355.2l-57.6 214.4 156.8 156.8 214.4-57.6 57.6-214.4-156.8-156.8-214.4 57.6z m230.4-86.4l169.6 169.6c4.8 4.8 6.4 9.6 4.8 16l-62.4 232c-1.6 4.8-6.4 9.6-11.2 11.2l-232 62.4c-4.8 1.6-11.2 0-16-4.8L268.8 585.6c-4.8-4.8-6.4-9.6-4.8-16l62.4-232c1.6-4.8 6.4-9.6 11.2-11.2l232-62.4c6.4 0 11.2 1.6 16 4.8z" fill="#050D42" /><path d="M561.6 326.4c-25.6-6.4-41.6-33.6-33.6-59.2s33.6-41.6 59.2-33.6c25.6 6.4 41.6 33.6 33.6 59.2-6.4 25.6-33.6 40-59.2 33.6z m136 136c-6.4-25.6 8-51.2 33.6-59.2 25.6-6.4 51.2 8 59.2 33.6 6.4 25.6-8 51.2-33.6 59.2-25.6 6.4-52.8-8-59.2-33.6z m-49.6 185.6c19.2-19.2 49.6-19.2 67.2 0 19.2 19.2 19.2 49.6 0 67.2-19.2 19.2-49.6 19.2-67.2 0-19.2-17.6-19.2-48 0-67.2z m-185.6 49.6c25.6 6.4 41.6 33.6 33.6 59.2-6.4 25.6-33.6 41.6-59.2 33.6-25.6-6.4-41.6-33.6-33.6-59.2 6.4-25.6 33.6-40 59.2-33.6z m-136-136c6.4 25.6-8 51.2-33.6 59.2-25.6 6.4-51.2-8-59.2-33.6-6.4-25.6 8-51.2 33.6-59.2 25.6-6.4 52.8 8 59.2 33.6z m49.6-185.6c-19.2 19.2-49.6 19.2-67.2 0-19.2-19.2-19.2-49.6 0-67.2 19.2-19.2 49.6-19.2 67.2 0s19.2 48 0 67.2z" fill="#2F4BFF" /><path d="M483.014155 620.184198a112 112 0 1 0 57.97169-216.368396 112 112 0 1 0-57.97169 216.368396Z" fill="#2F4BFF" /><path d="M598.4 187.2c-17.6-4.8-27.2-22.4-22.4-38.4 4.8-17.6 22.4-27.2 38.4-22.4 17.6 4.8 27.2 22.4 22.4 38.4s-20.8 27.2-38.4 22.4z m238.4 238.4c-4.8-17.6 4.8-35.2 22.4-38.4 17.6-4.8 35.2 4.8 38.4 22.4 4.8 17.6-4.8 35.2-22.4 38.4-16 4.8-33.6-6.4-38.4-22.4z m-88 323.2c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8c-12.8 12.8-32 12.8-44.8 0s-11.2-32 0-44.8z m-323.2 88c17.6 4.8 27.2 22.4 22.4 38.4-4.8 17.6-22.4 27.2-38.4 22.4-17.6-4.8-27.2-22.4-22.4-38.4 3.2-17.6 20.8-27.2 38.4-22.4zM187.2 598.4c4.8 17.6-4.8 35.2-22.4 38.4-17.6 4.8-35.2-4.8-38.4-22.4-4.8-17.6 4.8-35.2 22.4-38.4 16-4.8 33.6 6.4 38.4 22.4z m88-323.2c-12.8 12.8-32 12.8-44.8 0-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0 11.2 11.2 11.2 32 0 44.8z" fill="#2F4BFF" /></svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                Working harder
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero

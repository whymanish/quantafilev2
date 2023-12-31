import React from 'react'

const Features = () => {
  return (
    <div>

      <section>
        <div class="relative items-center w-full px-5 py-16 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div class="mb-12 space-y-2 text-center">
            <h2 class="text-3xl font-bold  text-gray-700 md:text-4xl dark:text-white">Features Offered</h2>

          </div>
          <div class="grid items-center grid-cols-1 gap-6 text-left lg:gap-24 lg:grid-cols-3">
            <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div class="mx-auto lg:max-w-7xl">
                <ul role="list" class="grid grid-cols-1 gap-6 list-none lg:grid-cols-1 lg:gap-6">
                  <li className='group shadow-lg border  rounded-3xl p-4'>
                    <div className='flex align-center'>
                      <svg width="32px" height="32px" className='transition duration-300 group-hover:contrast-125 contrast-0' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.83327 15.2485L4.56432 15.0809L3.83327 15.2485ZM3.83327 9.35323L4.56432 9.52078L3.83327 9.35323ZM20.1667 9.35323L19.4357 9.52079L20.1667 9.35323ZM20.1667 15.2485L19.4357 15.0809L20.1667 15.2485ZM14.8801 20.6589L15.0552 21.3882L14.8801 20.6589ZM9.11986 20.6589L9.29493 19.9296L9.11986 20.6589ZM9.11985 3.94279L9.29493 4.67207L9.11985 3.94279ZM14.8801 3.94279L15.0552 3.21351L14.8801 3.94279ZM8.82008 3C8.82008 2.58579 8.48429 2.25 8.07008 2.25C7.65587 2.25 7.32008 2.58579 7.32008 3H8.82008ZM7.32008 5.51375C7.32008 5.92796 7.65587 6.26375 8.07008 6.26375C8.48429 6.26375 8.82008 5.92796 8.82008 5.51375H7.32008ZM16.6799 3C16.6799 2.58579 16.3441 2.25 15.9299 2.25C15.5157 2.25 15.1799 2.58579 15.1799 3H16.6799ZM15.1799 5.51375C15.1799 5.92796 15.5157 6.26375 15.9299 6.26375C16.3441 6.26375 16.6799 5.92796 16.6799 5.51375H15.1799ZM4.56432 15.0809C4.14523 13.2524 4.14523 11.3493 4.56432 9.52078L3.10223 9.18568C2.63259 11.2347 2.63259 13.367 3.10223 15.416L4.56432 15.0809ZM19.4357 9.52079C19.8548 11.3493 19.8548 13.2524 19.4357 15.0809L20.8978 15.416C21.3674 13.367 21.3674 11.2347 20.8978 9.18568L19.4357 9.52079ZM14.7051 19.9296C12.9258 20.3568 11.0742 20.3568 9.29493 19.9296L8.94478 21.3882C10.9542 21.8706 13.0458 21.8706 15.0552 21.3882L14.7051 19.9296ZM9.29493 4.67207C11.0742 4.24493 12.9258 4.24493 14.7051 4.67207L15.0552 3.21351C13.0458 2.73111 10.9542 2.73111 8.94478 3.21351L9.29493 4.67207ZM9.29493 19.9296C6.95607 19.3682 5.11769 17.4953 4.56432 15.0809L3.10223 15.416C3.77946 18.3708 6.03739 20.6902 8.94478 21.3882L9.29493 19.9296ZM15.0552 21.3882C17.9626 20.6902 20.2205 18.3708 20.8978 15.416L19.4357 15.0809C18.8823 17.4953 17.0439 19.3682 14.7051 19.9296L15.0552 21.3882ZM14.7051 4.67207C17.0439 5.23355 18.8823 7.10642 19.4357 9.52079L20.8978 9.18568C20.2205 6.23089 17.9626 3.91147 15.0552 3.21351L14.7051 4.67207ZM8.94478 3.21351C6.03739 3.91147 3.77946 6.23089 3.10223 9.18568L4.56432 9.52078C5.11769 7.10641 6.95607 5.23355 9.29493 4.67207L8.94478 3.21351ZM4.14016 9.02886H19.8598V7.52886H4.14016V9.02886ZM7.32008 3V5.51375H8.82008V3H7.32008ZM15.1799 3V5.51375H16.6799V3H15.1799Z" fill="#363853" />
                        <path d="M13.442 13.924C13.847 13.636 14.099 13.204 14.099 12.619C14.099 11.404 13.163 10.774 12.056 10.774C10.949 10.774 10.004 11.404 10.004 12.619C10.004 13.204 10.265 13.636 10.661 13.924C10.112 14.257 9.797 14.806 9.797 15.445C9.797 16.606 10.652 17.326 12.056 17.326C13.451 17.326 14.315 16.606 14.315 15.445C14.315 14.806 14 14.257 13.442 13.924ZM12.056 11.944C12.524 11.944 12.866 12.214 12.866 12.682C12.866 13.141 12.524 13.429 12.056 13.429C11.588 13.429 11.246 13.141 11.246 12.682C11.246 12.214 11.588 11.944 12.056 11.944ZM12.056 16.156C11.462 16.156 11.03 15.85 11.03 15.283C11.03 14.725 11.462 14.419 12.056 14.419C12.65 14.419 13.082 14.725 13.082 15.283C13.082 15.85 12.65 16.156 12.056 16.156Z" fill="#0095FF" />
                      </svg>
                      <p class="mt-1 group-hover:text-blue-400 transition duration-300 text-xl ml-4 font-bold leading-6 text-gray-600">
                        On time Delivery
                      </p>
                    </div>
                    <div class="mt-4 text-sm text-gray-500">
                      Plus, our platform is constantly evolving to meet the changing needs.
                    </div>
                  </li>
                  <li className='group shadow-lg border rounded-3xl p-4'>
                    <div className='flex align-center'>
                      <svg width="32px" height="32px" className='transition duration-300 contrast-0 group-hover:contrast-125' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 3.2524C15.1627 2.63619 17.5428 3.14662 19.1981 4.80192C20.8534 6.45723 21.3638 8.8373 20.7476 11M14.9369 5.96407C15.7093 5.81021 16.5991 6.0767 17.2612 6.73883C17.9233 7.40095 18.1898 8.29065 18.0359 9.0631" stroke="#0095FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.1653 20.8835C16.0469 21.0388 16.9531 21.0388 17.8347 20.8835C19.2516 20.6338 20.3929 19.6826 20.786 18.4236L20.8694 18.1565C20.956 17.879 21 17.5919 21 17.3034C21 16.0313 19.8623 15 18.4589 15H14.5411C13.1377 15 12 16.0313 12 17.3034C12 17.5919 12.044 17.879 12.1306 18.1565L12.214 18.4236C12.6071 19.6826 13.7484 20.6338 15.1653 20.8835ZM15.1653 20.8835C9.04195 19.7489 4.25108 14.958 3.1165 8.83468M3.1165 8.83468C2.96117 7.95315 2.96117 7.04686 3.1165 6.16532C3.36618 4.74842 4.31744 3.60713 5.57641 3.21402L5.84345 3.13063C6.12103 3.04396 6.40813 3 6.69661 3C7.96874 3 9.00001 4.13768 9 5.54106L9 9.45894C9.00001 10.8623 7.96874 12 6.69661 12C6.40813 12 6.12103 11.956 5.84345 11.8694L5.57641 11.786C4.31744 11.3929 3.36618 10.2516 3.1165 8.83468Z" stroke="#363853" stroke-width="1.5" />
                      </svg>
                      <p class="mt-1 group-hover:text-blue-400 transition duration-300 text-xl ml-4 font-bold leading-6 text-gray-600">
                        24/7 Support
                      </p>
                    </div>
                    <div class="mt-4 text-sm text-gray-500">
                      Plus, our platform is constantly evolving to meet the changing needs.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="order-first block w-full mt-12 aspect-square lg:mt-0">
              <img class="object-cover rounded-xl  object-center w-full h-full mx-auto bg-gray-300 border lg:ml-auto" alt="hero" src="https://images.unsplash.com/photo-1626908013351-800ddd734b8a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div class="mx-auto lg:max-w-7xl">
                <ul role="list" class="grid grid-cols-1 gap-6 list-none lg:grid-cols-1 lg:gap-6">
                  <li className='group shadow-lg border rounded-3xl p-4'>
                    <div className='flex align-center'>
                      <svg width="32px" height="32px" className='transition duration-300 contrast-0 group-hover:contrast-125' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.95043 20.6471C6.17301 19.9956 4.00437 17.827 3.35287 15.0496C2.88237 13.0437 2.88237 10.9563 3.35287 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35287C17.827 4.00437 19.9956 6.173 20.6471 8.95043C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95043 20.6471Z" stroke="#0095FF" stroke-width="1.5" />
                        <path d="M8.95043 20.6471C10.9563 21.1176 13.0437 21.1176 15.0496 20.6471C17.827 19.9956 19.9956 17.827 20.6471 15.0496C21.1176 13.0437 21.1176 10.9563 20.6471 8.95043C19.9956 6.173 17.827 4.00437 15.0496 3.35288C13.0437 2.88237 10.9563 2.88237 8.95043 3.35288C6.173 4.00437 4.00437 6.17301 3.35287 8.95043" stroke="#363853" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M9.25 11.75L11.25 13.75L14.75 10" stroke="#0095FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p class="mt-1 group-hover:text-blue-400 transition duration-300 text-xl ml-4 font-bold leading-6 text-gray-600">
                        Quality Work
                      </p>
                    </div>
                    <div class="mt-4 text-sm text-gray-500">
                      Plus, our platform is constantly evolving to meet the changing needs.
                    </div>
                  </li>
                  <li className='group shadow-lg border rounded-3xl p-4'>
                    <div className='flex align-center'>
                      <svg width="32px" height="32px" className='transition duration-300 contrast-0 group-hover:contrast-125' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8768 16.1682C13.0292 15.7535 13.6375 15.7535 13.7899 16.1682L14.2066 17.3023C14.2554 17.435 14.3637 17.5395 14.5013 17.5865L15.6774 17.9884C16.1075 18.1353 16.1075 18.7218 15.6774 18.8688L14.5013 19.2706C14.3637 19.3177 14.2554 19.4221 14.2066 19.5549L13.7899 20.6889C13.6375 21.1037 13.0292 21.1037 12.8768 20.6889L12.4601 19.5549C12.4113 19.4221 12.303 19.3177 12.1653 19.2706L10.9892 18.8688C10.5591 18.7218 10.5591 18.1353 10.9892 17.9884L12.1653 17.5865C12.303 17.5395 12.4113 17.435 12.4601 17.3023L12.8768 16.1682Z" fill="#0095FF" />
                        <path d="M14.6394 3.47278C14.8711 2.84241 15.7956 2.84241 16.0272 3.47278L16.8211 5.63332C16.8953 5.8351 17.0599 5.99384 17.2691 6.06534L19.5097 6.83089C20.1634 7.05426 20.1634 7.94574 19.5097 8.16911L17.2691 8.93466C17.0599 9.00616 16.8953 9.1649 16.8211 9.36668L16.0272 11.5272C15.7956 12.1576 14.8711 12.1576 14.6394 11.5272L13.8455 9.36668C13.7714 9.1649 13.6068 9.00616 13.3975 8.93466L11.157 8.16911C10.5032 7.94574 10.5032 7.05426 11.157 6.83089L13.3975 6.06534C13.6068 5.99384 13.7714 5.8351 13.8455 5.63332L14.6394 3.47278Z" fill="#0095FF" />
                        <path d="M6.48641 9.36289C6.65786 8.87904 7.34214 8.87904 7.51358 9.36289L7.9824 10.686C8.03728 10.8409 8.15913 10.9627 8.31401 11.0176L9.63711 11.4864C10.121 11.6579 10.121 12.3421 9.63711 12.5136L8.31401 12.9824C8.15913 13.0373 8.03728 13.1591 7.9824 13.314L7.51358 14.6371C7.34214 15.121 6.65786 15.121 6.48641 14.6371L6.0176 13.314C5.96272 13.1591 5.84087 13.0373 5.68599 12.9824L4.36289 12.5136C3.87904 12.3421 3.87904 11.6579 4.36289 11.4864L5.68599 11.0176C5.84087 10.9627 5.96272 10.8409 6.0176 10.686L6.48641 9.36289Z" fill="#0095FF" />
                      </svg>
                      <p class="mt-1 group-hover:text-blue-400 transition duration-300 text-xl ml-4 font-bold leading-6 text-gray-600">
                        Affordable
                      </p>
                    </div>
                    <div class="mt-4 text-sm text-gray-500">
                      Plus, our platform is constantly evolving to meet the changing needs.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features

import React from 'react'

const Features = () => {
  return (
    <div>

      <section>
        <div class="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div class="mb-12 space-y-2 text-center">
            <h2 class="text-3xl font-bold text-gray-700 md:text-4xl dark:text-white">Features Offered</h2>

          </div>
          <div class="grid items-center grid-cols-1 gap-12 text-left lg:gap-24 md:grid-cols-2 lg:grid-cols-3">
            <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div class="mx-auto lg:max-w-7xl">
                <ul role="list" class="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-6">
                  <li>
                    <div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Easy onboarding
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Plus, our platform is constantly evolving to meet the changing needs.
                    </div>
                  </li>
                  <li>
                    <div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Customer support
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Plus, our platform is constantly evolving to meet the changing needs.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="order-first block w-full mt-12 aspect-square lg:mt-0">
              <img class="object-cover rounded-xl  object-center w-full h-full mx-auto bg-gray-300 border lg:ml-auto" alt="hero" src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div class="mx-auto lg:max-w-7xl">
                <ul role="list" class="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-6">
                  <li>
                    <div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Easy onboarding
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
                      Plus, our platform is constantly evolving to meet the changing needs.
                    </div>
                  </li>
                  <li>
                    <div>
                      <p class="mt-5 text-lg font-medium leading-6 text-black">
                        Customer support
                      </p>
                    </div>
                    <div class="mt-2 text-base text-gray-500">
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

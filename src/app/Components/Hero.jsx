import React from 'react'

const Hero = () => {
  return (
    <div className=''>
      <div class="bg-black  ">


        <section class="">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid h-screen items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p class="text-base mt-16 lg:mt-0 font-semibold tracking-wider text-blue-600 uppercase">A social media for learners</p>
                <h1 class="mt-4 text-4xl font-bold text-white lg:mt-8 sm:text-6xl xl:text-8xl">Connect & learn from Quantafile</h1>
                <p class="mt-4 text-base text-gray-300 lg:mt-8 sm:text-xl">Grow your career fast with right mentor.</p>

                <a href="#" title="" class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-gray-100 transition-all duration-200 bg-blue-600 rounded-full lg:mt-16 hover:bg-blue-900 focus:bg-yellow-400" role="button">
                  Join for free
                  <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>

              </div>

              <div>
                <img class="w-full " src="blackhero.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default Hero

import React from 'react'

const Hero = () => {
  return (
    <div>
        <section class="relative flex items-center justify-center">
                <div class="relative mt-20 lg:mt-0  items-center w-full px-5 py-12 mx-auto max-w-7xl lg:px-16 lg:py-32 md:px-12">
                  <div>
                    <div class="text-center">
                      <span class="bg-[#0000ff]/10 px-4 py-2 rounded-full w-auto"><span class="text-sm text-[#0000ff]">Scalable Cold Email Personalization</span></span>
                      <p class="mt-8 text-3xl font-extrabold tracking-tight text-black lg:text-6xl">
                        Do your personalized
                        <span class="lg:block">emails take too long?</span>
                      </p>
                      <p class="max-w-xl mx-auto mt-4 text-base lg:text-xl text-slate-500">
                        We help sales teams increase their outbound with scalable and high
                        quality customized emails for every prospect.
                      </p>
                    </div>
                  </div>
                  <div class="relative items-center w-full py-12 pb-12 mx-auto mt-12 max-w-7xl">
                    <svg class="absolute -mt-24 blur-3xl" fill="none" viewBox="0 0 400 400" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_10_20)">
                        <g filter="url(#filter0_f_10_20)">
                          <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#03FFE0"></path>
                          <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#7C87F8"></path>
                          <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#4C65E4"></path>
                          <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#043AFF"></path>
                        </g>
                      </g>
                      <defs>
                        <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="720.666" id="filter0_f_10_20" width="720.666" x="-160.333" y="-160.333">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                          <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666"></feGaussianBlur>
                        </filter>
                      </defs>
                    </svg>
                    <img alt="" class="relative object-cover w-full border rounded shadow-2xl lg:rounded-2xl" src="https://brightlight.lexingtonthemes.com/assets/dashboard.svg"/>
                  </div>
                </div>
              </section>
    </div>
  )
}

export default Hero
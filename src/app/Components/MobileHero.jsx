import React from 'react'

const MobileHero = () => {
    return (
        <div>

            
            <section class="relative   flex items-center justify-center">
                <div class="relative mt-10 items-center w-full px-5 py-12 mx-auto max-w-7xl lg:px-16 lg:py-24 md:px-12">
                    <div>
                        <div class="relative text-center">
                            <p class="mt-8 text-4xl font-bold tracking-tighter text-black md:text-6xl">
                            The Quantafile brings <span class="md:block">something special for you !</span>
                            </p>
                            <p class="max-w-xl mx-auto mt-4 text-sm text-slate-600">
                                Click on any component in the browser to open its code in your IDE.
                                You can use it as a browser extension or as a library. For React,
                                Preact, Solid, Vue and Svelte.
                            </p>

                        </div>
                    </div>
                    <div class="relative items-center w-full py-12 pb-12 mx-auto  max-w-7xl">
                        <svg fill="none" viewBox="0 0 400 400" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" class="absolute -mt-24 blur-3xl">
                            <g clip-path="url(#clip0_10_20)">
                                <g filter="url(#filter0_f_10_20)">
                                    <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#ff237d"></path>
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
                            </defs></svg><img src='https://images.unsplash.com/photo-1504253492562-cbc4dc540fcb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' class="relative object-cover h-[46vh] w-full rounded shadow-2xl lg:rounded-2xl" >
                        </img>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MobileHero

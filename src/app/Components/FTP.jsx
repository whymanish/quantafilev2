'use client'
// CardCarousel.js
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const CardCarousel = () => {
    useEffect(() => {
        // Check if the window width is greater than 768px (typical threshold for tablets)
        if (window.innerWidth > 768) {
            gsap.utils.toArray('.card-item').forEach((item, index) => {
                gsap.to(item, {
                    x: index % 2 === 0 ? '20%' : '-20%',
                    rotate: index % 2 === 0 ? 1 : 1,
                    duration: 0.85,
                    scrollTrigger: {
                        trigger: item,
                        scrub: true,
                        start: 'top 20%',
                    },
                });
            });
        }
    }, []);

    return (
        <div className="overflow-x-hidden">
            <section className="w-full">
                <div className="relative items-center w-full px-5 pb-20 mx-auto md:px-12 lg:px-0 max-w-7xl">
                    <div className="relative flex-col pt-10 items-start m-auto align-middle">
                        {/* First Card */}
                        <div className="grid mt-20 grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24 card-item">
                            <div className="order-first block w-full lg:w-4/5 mt-12 aspect-square lg:mt-0">
                                <img
                                    className="object-cover object-center h-full rounded-2xl w-full mx-auto bg-gray-300 border lg:ml-auto"
                                    alt="hero"
                                    src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                />
                            </div>
                            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                                <div className="max-w-xl text-center lg:text-left">
                                    <div>
                                        <p className="text-4xl lg:text-5xl font-extrabold tracking-tight text-black">
                                            PRESENTATION
                                        </p>
                                        <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                                            Use this paragraph to share information about your company or
                                            products. Make it engaging and interesting, and showcase your
                                            brand's personality. Thanks for visiting our website!
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                                        <a
                                            href="#_"
                                            className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                                        >
                                            Button
                                        </a>
                                        <a
                                            href="#_"
                                            className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                                        >
                                            Learn more &nbsp; →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Card */}
                        <div className="grid mt-20 grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24 card-item">
                            <div className="order-first block w-full lg:w-4/5 mt-12 aspect-square lg:mt-0">
                                <img
                                    className="object-cover object-center h-full rounded-2xl w-full mx-auto bg-gray-300 border lg:ml-auto"
                                    alt="hero"
                                    src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                />
                            </div>
                            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                                <div className="max-w-xl text-center lg:text-left">
                                    <div>
                                        <p className=" text-4xl lg:text-5xl font-extrabold tracking-tight text-black ">
                                            WEB DEVELOPMENT
                                        </p>
                                        <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                                            Use this paragraph to share information about your company or
                                            products. Make it engaging and interesting, and showcase your
                                            brand's personality. Thanks for visiting our website!
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                                        <a
                                            href="#_"
                                            className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                                        >
                                            Button
                                        </a>
                                        <a
                                            href="#_"
                                            className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                                        >
                                            Learn more &nbsp; →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid mt-20 grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24 card-item">
                            <div class="order-first block w-full lg:w-4/5 mt-12 aspect-square lg:mt-0">
                                <img
                                    class="object-cover object-center h-full rounded-2xl w-full mx-auto bg-gray-300 border lg:ml-auto"
                                    alt="hero"
                                    src="https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                />
                            </div>
                            <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                                <div class="max-w-xl text-center lg:text-left">
                                    <div>
                                        <p class=" text-4xl lg:text-5xl font-extrabold tracking-tight text-black ">
                                            UI/UX DEVELOPMENT
                                        </p>
                                        <p class="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                                            Use this paragraph to share information about your company
                                            or products. Make it engaging and interesting, and
                                            showcase your brand's personality. Thanks for visiting our
                                            website!
                                        </p>
                                    </div>
                                    <div class="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                                        <a
                                            href="#_"
                                            class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                                        >
                                            Button
                                        </a>
                                        <a
                                            href="#_"
                                            class="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                                        >
                                            Learn more &nbsp; →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid mt-20 grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24 card-item">
                            <div class="order-first block w-full lg:w-4/5 mt-12 aspect-square lg:mt-0">
                                <img
                                    class="object-cover object-center h-full rounded-2xl w-full mx-auto bg-gray-300 border lg:ml-auto"
                                    alt="hero"
                                    src="https://images.unsplash.com/photo-1558137623-ce933996c730?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                />
                            </div>
                            <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                                <div class="max-w-xl text-center lg:text-left">
                                    <div>
                                        <p class=" text-4xl lg:text-5xl font-extrabold tracking-tight text-black ">
                                            COLLEGE PROJECTS
                                        </p>
                                        <p class="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                                            Use this paragraph to share information about your company
                                            or products. Make it engaging and interesting, and
                                            showcase your brand's personality. Thanks for visiting our
                                            website!
                                        </p>
                                    </div>
                                    <div class="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                                        <a
                                            href="#_"
                                            class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                                        >
                                            Button
                                        </a>
                                        <a
                                            href="#_"
                                            class="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                                        >
                                            Learn more &nbsp; →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default CardCarousel;

import React from 'react'

const Role = () => {
    return (
        <div>

            <section class="border-t">
                <div class="relative px-4 py-24 mx-auto sm:px-6 md:px-4 lg:max-w-6xl lg:px-20 lg:py-36">
                    <dl class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
                        <a href="https://acclivity.unwrapped.design/">
                            <div class="h-1/2 overflow-hidden bg-gray-100 rounded-3xl">
                                <div class="p-8 pb-0">
                                    <p class="mt-4 text-3xl font-semibold">
                                        5k Gradient wallappers
                                    </p>
                                    <p class="mt-2 text-gray-500">
                                        A set of 28 dark &amp; light mesh gradients in 5k resolution to use on
                                        your design projects, as backgrounds, wallpapers, presentations,..
                                        and anywhere you want.
                                    </p>
                                </div>
                                <div class="mt-12">
                                    <img src="https://windstatic.com/images/placeholders/rectangle2.svg" className='object-cover h-1/2' alt="" />
                                </div>
                            </div>
                        </a>
                        <a href="https://monoqrom.unwrapped.design/">
                            <div class="h-full overflow-hidden bg-gray-100 rounded-3xl">
                                <div class="p-8 pb-0">
                                    <p class="mt-4 text-3xl font-semibold">
                                        Figma wireframe Kit
                                    </p>
                                    <p class="mt-2 text-gray-500">
                                        Quick method to start your design projects in Figma. monoqrom.
                                        allows you to prototype your website in minutes, get it done
                                        quicker and deliver more!
                                    </p>
                                </div>
                                <div class="mt-12">
                                    <img src="https://windstatic.com/images/placeholders/rectangle2.svg" alt="" />
                                </div>
                            </div>
                        </a>
                    </dl>
                </div>
            </section>
        </div>
    )
}

export default Role

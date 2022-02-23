import React from "react";

type Props = {};

export const Triple = (props: Props) => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12 h-full">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">
                    Collections
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
                    <a href="" class="relative block group h-96">
                        <span class="absolute inset-0 border-2 border-black border-dashed"></span>

                        <div class="relative flex items-end h-full transition-transform transform bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
                            <div class="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-12 h-12"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <h2 class="mt-4 text-2xl font-medium">
                                    Go around the world
                                </h2>
                            </div>

                            <div class="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
                                <h2 class="mt-4 text-2xl font-medium">
                                    Go around the world
                                </h2>

                                <p class="mt-4">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Cupiditate, praesentium
                                    voluptatem omnis atque culpa repellendus.
                                </p>

                                <p class="mt-8 font-bold">Read more</p>
                            </div>
                        </div>
                    </a>
                    {/* <!-- product - end -->

      <!-- product - start --> */}
                    <div class="p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
                        <a class="block p-6 bg-white sm:p-8 rounded-xl h-full" href="">
                            <div class="mt-16 sm:pr-8">
                                <h5 class="text-xl font-bold text-gray-900">
                                    Science of Chemistry
                                </h5>

                                <p class="mt-2 text-sm text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Ad, adipisci.
                                </p>
                            </div>
                        </a>
                    </div>
                    {/* <!-- product - end -->

      <!-- product - start --> */}
                    <div class="relative px-8 py-16 text-center text-white bg-blue-600 rounded-lg shadow-2xl">
  <p class="text-2xl font-medium sm:text-3xl">New product launch 🚀</p>
  <p class="mt-4 text-sm text-blue-100">Lorem ipsum dolor sit amet.</p>
</div>
                    {/* <!-- product - end --> */}
                </div>
            </div>
        </div>
    );
};

import React from "react";

export const Explore = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="flex justify-between items-end gap-4 mb-6">
                    <div className="flex flex-wrap items-center space-x-2 h-full">
                        <div className="item w-auto h-auto">
                            {" "}
                            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
                                Explore homes in
                            </h2>
                        </div>
                        <div className="item w-32 h-auto">
                            {" "}
                            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
                                Austin
                            </h2>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
                    >
                        Show more
                    </a>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6">
                    {/* <!-- product - start --> */}
                    <a
                        href=""
                        className="block rounded-lg shadow-sm shadow-indigo-100"
                    >
                        <img
                            alt="123 Wallaby Avenue, Park Road"
                            src="https://images.unsplash.com/photo-1554995207-c18c203602cb"
                            className="object-cover w-full h-64 rounded-md"
                        />

                        <div className="mt-2">
                            <dl>
                                <div>
                                    <dt className="sr-only">Price</dt>

                                    <dd className="text-sm text-gray-500">
                                        $240,000
                                    </dd>
                                </div>

                                <div>
                                    <dt className="sr-only">Address</dt>

                                    <dd className="font-medium">
                                        123 Wallaby Avenue, Park Road
                                    </dd>
                                </div>
                            </dl>

                            <dl className="flex items-center mt-6 space-x-8 text-xs">
                                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                                    <svg
                                        className="w-4 h-4 text-indigo-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                        />
                                    </svg>

                                    <div className="sm:ml-3 mt-1.5 sm:mt-0">
                                        <dt className="text-gray-500">
                                            Parking
                                        </dt>

                                        <dd className="font-medium">
                                            2 spaces
                                        </dd>
                                    </div>
                                </div>

                                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                                    <svg
                                        className="w-4 h-4 text-indigo-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                        />
                                    </svg>

                                    <div className="sm:ml-3 mt-1.5 sm:mt-0">
                                        <dt className="text-gray-500">
                                            Bathroom
                                        </dt>

                                        <dd className="font-medium">2 rooms</dd>
                                    </div>
                                </div>

                                <div className="sm:inline-flex sm:items-center sm:shrink-0">
                                    <svg
                                        className="w-4 h-4 text-indigo-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    </svg>

                                    <div className="sm:ml-3 mt-1.5 sm:mt-0">
                                        <dt className="text-gray-500">
                                            Bedroom
                                        </dt>

                                        <dd className="font-medium">4 rooms</dd>
                                    </div>
                                </div>
                            </dl>
                        </div>
                    </a>
                    {/* <!-- product - end -->
    
          <!-- product - start --> */}
                    <div className="bg-white rounded w-full mx-auto rounded-2xl shadow-lg">
                        <div className="bg-gray-200 h-64 overflow-hidden">
                            <img
                                alt="123 Wallaby Avenue, Park Road"
                                src="https://images.unsplash.com/photo-1554995207-c18c203602cb"
                                className="object-cover w-full h-64 rounded-md"
                            />
                        </div>
                        <div className="p-4">
                            <div className="grid grid-cols-3 gap-1 mt-2">
                                <div className="h-8  rounded ">
                                    {" "}
                                    <dd className="text-md text-gray-500 text-left ">
                                        $240.000
                                    </dd>
                                </div>
                                <div className="h-8  rounded"></div>
                                <div className="h-8  rounded">
                                    <dd className="text-sm text-black-500 text-right">
                                        SALE/RENT
                                    </dd>
                                </div>
                                <div className="h-8 col-span-3  rounded">
                                    <div>
                                        <dt className="sr-only">Address</dt>

                                        <dd className="font-medium">
                                            123 Wallaby Avenue, Park Road
                                        </dd>
                                    </div>
                                </div>

                                <div className="col-span-1 h-full  rounded mt-2">
                                    <div className="sm:inline-flex sm:items-center sm:shrink-0">
                                        <svg
                                            className="w-4 h-4 text-indigo-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                            />
                                        </svg>

                                        <div className="sm:ml-3 mt-1.5 sm:mt-0">
                                            <dt className="text-xs text-gray-500">
                                                Bedroom
                                            </dt>

                                            <dd className="text-xs font-medium">
                                                4 rooms
                                            </dd>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1 w-full h-full rounded mt-2">
                                    <div className="sm:inline-flex sm:items-center sm:shrink-0">
                                        <svg
                                            className="w-4 h-4 text-indigo-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                            />
                                        </svg>

                                        <div className="sm:ml-3 mt-1.5 sm:mt-0">
                                            <dt className="text-xs text-gray-500">
                                                Bathroom
                                            </dt>

                                            <dd className="text-xs font-medium">
                                                2 rooms
                                            </dd>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-full  rounded mt-2">
                                    <div className="sm:inline-flex sm:items-center sm:shrink-0">
                                        <svg
                                            className="w-4 h-4 text-indigo-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                            />
                                        </svg>

                                        <div className="sm:ml-3 mt-1.5 sm:mt-0">
                                            <dt className="text-xs text-gray-500">
                                                Square Feet
                                            </dt>

                                            <dd className="text-xs font-medium">
                                                1750
                                            </dd>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- product - end -->
    
          <!-- product - start --> */}
                    <div>
                        <a
                            href="#"
                            className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                loading="lazy"
                                alt="Photo by Austin Wade"
                                className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                            />
                        </a>

                        <div className="flex flex-col">
                            <span className="text-gray-500">Men</span>
                            <a
                                href="#"
                                className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
                            >
                                Streetwear
                            </a>
                        </div>
                    </div>
                    {/* <!-- product - end -->
    
          <!-- product - start --> */}
                    <div>
                        <a
                            href="#"
                            className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?auto=format&q=75&fit=crop&w=600&h=700"
                                loading="lazy"
                                alt="Photo by Austin Wade"
                                className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                            />
                        </a>

                        <div className="flex flex-col">
                            <span className="text-gray-500">Women</span>
                            <a
                                href="#"
                                className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
                            >
                                Sale
                            </a>
                        </div>
                    </div>
                    {/* <!-- product - end --> */}
                </div>
            </div>
        </div>
    );
};

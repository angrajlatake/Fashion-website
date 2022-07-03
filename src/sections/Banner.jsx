import React from "react";

const Banner = () => {
  return (
    <section className="relative min-h-[100vh] w-[80vw] mx-auto flex justify-center items-center">
      <div
        className="min-h-[100vh] flex flex-col justify-center items-center gap-4 "
        id="up"
      >
        <h1 className="text-5xl whitespace-nowrap uppercase leading-none">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
            className="block px-8 py-4 bg-gray-900 text-white"
          >
            Lorem ipsum dolor sit amet.
          </span>
        </h1>
        <h1 className="text-5xl whitespace-nowrap uppercase leading-none">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-8"
            data-scroll-target="#up"
            className="block px-8 py-4 bg-gray-900 text-white"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </span>
        </h1>
        <h1 className="text-5xl whitespace-nowrap uppercase leading-none">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="4"
            data-scroll-target="#up"
            className="block px-8 py-4 bg-gray-900 text-white"
          >
            Lorem ipsum dolor sit amet consectetur.
          </span>
        </h1>
        <h1 className="text-5xl whitespace-nowrap uppercase leading-none">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
            className="block px-8 py-4 bg-gray-900 text-white"
          >
            Lorem ipsum dolor sit amet.
          </span>
        </h1>
        <h1 className="text-5xl whitespace-nowrap uppercase leading-none">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
            className="block px-8 py-4 bg-gray-900 text-white"
          >
            Lorem ipsum dolor sit amet.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Banner;

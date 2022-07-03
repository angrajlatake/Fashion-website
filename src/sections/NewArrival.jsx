import React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
import img5 from "../assets/Images/17.webp";
import img6 from "../assets/Images/16.webp";
import img7 from "../assets/Images/15.webp";
import img8 from "../assets/Images/14.webp";

const Product = ({ img, title }) => {
  return (
    <motion.div className="w-80 h-120 flex flex-col gap-4 justify-center items-center">
      <img
        className="w-full h-full cursor-pointer object-cover"
        src={img}
        alt={title}
      />
      <h1 className="text-2xl text-blue text-center cursor-pointer">{title}</h1>
    </motion.div>
  );
};

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const verticalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = verticalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom top",
          scroller: ".App",
          scrub: true,
          pin: true,
        },

        ease: "none",
      });
      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App",
            scrub: true,
          },
          ease: "none",
        }
      );
      ScrollTrigger.refresh();
    }, 1000);

    return () => {};
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-[100vh] w-full mx-auto flex justify-center items-center relative"
    >
      <div className=" absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[90vh] z-11 shadow-lg border-4 overflow-hidden">
        <div
          ref={verticalRef}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-auto flex flex-col justify-center items-center my-8"
        >
          <Product img={img5} title="photo1" />
          <Product img={img6} title="photo1" />
          <Product img={img7} title="photo1" />
          <Product img={img8} title="photo1" />
        </div>
      </div>
      <h1
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
        className="text-[10em] absolute top-4 left-[5%] z-20"
      >
        New Arrival
      </h1>
    </section>
  );
};

export default NewArrival;

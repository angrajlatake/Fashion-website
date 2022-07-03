import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";

import img9 from "../assets/Images/9.webp";
import img2 from "../assets/Images/10.webp";
import img3 from "../assets/Images/12.webp";
import img4 from "../assets/Images/4.webp";
import img5 from "../assets/Images/5.webp";
import img6 from "../assets/Images/13.webp";
import img7 from "../assets/Images/7.webp";
import img8 from "../assets/Images/8.webp";

const Product = ({ img, title }) => {
  return (
    <motion.div
      className="w-80 h-120 flex flex-col gap-4 justify-center items-center"
      initial={{ filter: "grayscale(100%)", scale: 0.8 }}
      whileInView={{ filter: "grayscale(0%)", scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: false, amount: "all" }}
    >
      <img
        className="w-full h-full cursor-pointer object-cover"
        src={img}
        alt={title}
      />
      <h1 className="text-2xl text-blue text-center cursor-pointer">{title}</h1>
    </motion.div>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);
  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          pin: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
        },
        x: -pinWrapWidth + (element.offsetWidth - 0.02 * element.offsetWidth),
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {};
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[100vh] h-auto w-[100vw] mx-auto overflow-hidden flex justify-start items-start bg-white"
    >
      <h1
        data-scroll
        data-scroll-speed="-1"
        className="mix-blend-difference text-[10em] text-white  absolute top-4 left-[5%] z-20"
      >
        Collections
      </h1>
      <div className="w-[35%] min-h-[100vh] bg-gray-900 flex justify-center items-center fixed z-10">
        <p className="text-white text-xl w-[80%] mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,
          fuga? Quos aspernatur omnis distinctio sit.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aperiam.
        </p>
      </div>
      <div
        ref={horizontalRef}
        className="relative pl-[37%] min-h-[100vh] text-3xl text-blue flex justify-center items-center gap-8 mx-4"
      >
        <Product img={img9} title="photo1" />
        <Product img={img2} title="photo1" />
        <Product img={img3} title="photo1" />
        <Product img={img4} title="photo1" />
        <Product img={img5} title="photo1" />
        <Product img={img6} title="photo1" />
        <Product img={img7} title="photo1" />
        <Product img={img8} title="photo1" />
      </div>
    </section>
  );
};

export default Shop;

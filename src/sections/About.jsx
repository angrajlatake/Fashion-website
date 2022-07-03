import React from "react";
import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";
const About = () => {
  return (
    <section
      className="relative min-h-[100vh] w-[80vw] mx-auto flex"
      id="fixed-target"
    >
      <h1
        className="text-[10em] text-black drop-shadow-lg absolute top-4 left-[5%] z-10"
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About us
      </h1>
      <div
        className="w-1/2 text-lg mt-[20%] mix-blend-screen"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#fixed-target"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        repudiandae. <br />
        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        consectetur nesciunt inventore voluptas commodi error?
        <br />
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
        blanditiis similique impedit!
      </div>
      <div className="w-1/2 relative">
        <img src={img3} className="h-auto w-full" alt="image1" />
        <img
          src={img1}
          data-scroll
          data-scroll-speed="7"
          className="h-auto w-[40%] absolute right-[95%] bottom-[10%]"
          alt="image2"
        />
        <img
          src={img2}
          data-scroll
          data-scroll-speed="2"
          className="h-auto w-[50%] absolute left-[80%] bottom-[30%]"
          alt="image3"
        />
      </div>
    </section>
  );
};

export default About;

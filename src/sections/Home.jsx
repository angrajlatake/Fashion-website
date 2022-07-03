import React from "react";
import CoverVideo from "../Components/CoverVideo";
import Logo from "../Components/Logo";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <section className="relative h-[100vh]">
      <CoverVideo />
      <Logo />
      <Navbar />
    </section>
  );
};

export default Home;

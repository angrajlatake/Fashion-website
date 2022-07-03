import { useState, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Loader from "./Components/Loader";
import Home from "./sections/Home";
import About from "./sections/About";
import Shop from "./sections/Shop";
import { AnimatePresence, motion } from "framer-motion";
import ScrollTriggerProxy from "./Components/ScrollTriggerProxy";
import Banner from "./sections/Banner";
import NewArrival from "./sections/NewArrival";

const App = () => {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div key="loader">
          <Loader setIsLoading={setIsLoading} />
        </motion.div>
      ) : (
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            lerp: 1,
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <ScrollTriggerProxy />
          <main className="App" data-scroll-container ref={containerRef}>
            <Home />
            <About />
            <Shop />
            <Banner />
            <NewArrival />
          </main>
        </LocomotiveScrollProvider>
      )}
    </AnimatePresence>
  );
};

export default App;

//TODO: 38.12

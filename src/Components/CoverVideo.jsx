import MainVideo from "../assets/Walking Girl.mp4";
import { motion } from "framer-motion";

const CoverVideo = () => {
  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      className="w-[100%] h-[100vh] relative"
      variants={containerVariant}
      initial="hidden"
      animate="show"
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 z-1 bg-black-500/80"></div>
      <div className="absolute top-0 bottom-0 left-0 right-0 z-5 flex flex-col justify-center items-center">
        <motion.div className="flex">
          <motion.h1
            data-scroll
            data-scroll-delay="0.03"
            data-scroll-speed="4"
            className="text-[10em] text-white drop-shadow-lg "
          >
            Zed Studios
          </motion.h1>
        </motion.div>
        <motion.h2
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
          className="text-[2.5em] text-white font-bold drop-shadow-lg capitalize"
        >
          Inspire. Create. Believe
        </motion.h2>
      </div>
      <video
        src={MainVideo}
        className="h-full w-full object-cover"
        type="video.mp4"
        autoPlay
        muted
        loop
      />
    </motion.div>
  );
};

export default CoverVideo;

//TODO: Add text color

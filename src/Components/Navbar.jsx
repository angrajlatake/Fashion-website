import { useState } from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navVariants = {
    hidden: {
      y: -100,
    },
    show: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 2,
      },
    },
  };
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="show"
      className={
        isOpen
          ? "absolute top-0 w-full justify-center items-center cursor-pointer transition-all duration-500 ease-in-out"
          : "absolute -top-20 w-full justify-center items-center cursor-pointer transition-all duration-500 ease-in-out"
      }
    >
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 100 }}
        dragElastic={0.05}
        dragSnapToOrigin
        onDrag={(e) => {
          if (e.y > 0) {
            setIsOpen(true);
          } else if (e.y < 200) {
            setIsOpen(false);
          }
        }}
        className="relative h-20 bg-gray-900 text-2xl list-none flex justify-around items-center w-full px-40 text-white"
      >
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Home
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          About
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Shop
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          New Arrival
        </motion.li>
      </motion.ul>
      <motion.div
        className=" absolute top-full left-1/2 flex -translate-x-1/2 justify-center bg-white text-black items-center w-80 h-14 mx-auto text-2xl menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </motion.div>
    </motion.div>
  );
};

export default Navbar;

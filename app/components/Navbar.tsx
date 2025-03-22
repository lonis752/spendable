"use client";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div 
      className="flex justify-center mt-5"
      initial={{ y: "-100%", opacity: 0 }} // Start off-screen
      animate={{ y: 0, opacity: 1 }} // Slide down into position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
    >
      <img className="w-1/4" src="/spendable-logo.png" alt="Spendable logo" />
    </motion.div>
  );
};

export default Navbar;
import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { motion } from "framer-motion";

const MobileNav = () => {
  const nav = ["Home", "About", "Projects", "Skills", "Contact", "Resume"];
  const { setIsOpen } = useContext(GlobalContext);

  return (
    <motion.div
      initial={{ opacity: 0.8, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.8, x: 200 }}
      className="lg:hidden h-screen border  border-[#4bd3a8ba]/30 rounded-sm shadow-white/20 shadow-sm flex flex-col justify-between max-w-[20em] absolute top-0 bg-[#0f192d]/60 z-30 right-0 backdrop-blur-sm "
    >
      <div className="flex flex-col gap-3 ">
        <span
          onClick={() => setIsOpen(false)}
          className="flex cursor-pointer justify-end py-3 px-3"
        >
          <IoClose className="text-3xl text-gray-400 active:text-[#4bd3a8b0]" />
        </span>
        {nav.map((item, index) => (
          <span
            onClick={() => setIsOpen(false)}
            className="text-gray-300 font-semibold text-xl  py-2 px-10 active:text-[#0eac79] cursor-pointer"
            key={index + 1}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="text-gray-400 mb-5 px-2 text-sm">
        <h1>&copy; 2025 LeonDev — Built with passion.</h1>
      </div>
    </motion.div>
  );
};

export default MobileNav;

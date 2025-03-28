import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react";

const Header = ({isDarkMode}) => {
  return (
    <div
      id="home"
      className="mx-auto flex h-screen w-11/12 max-w-3xl flex-col items-center justify-center gap-4 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.8, stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="" className="w-32 rounded-full" />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="font-ovo mb-3 flex items-end gap-2 text-xl md:text-2xl"
      >
        Hi, I am Pankaj Panday{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-ovo text-3xl sm:text-6xl lg:text-[66px]"
      >
        fullstack web developer based in India
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="font-ovo mx-auto max-w-2xl"
      >
        I enjoy creating aesthetically pleasing, responsive, and efficient web
        applications by leveraging modern technologies to deliver a smooth and
        engaging user experience.
      </motion.p>
      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contactme"
          className="flex items-center gap-2 rounded-full border border-white bg-black px-10 py-3 text-white dark:bg-transparent"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Pankaj-resume-fullstack.pdf"
          className="flex items-center gap-2 rounded-full border border-gray-500 bg-white px-10 py-3 dark:text-black"
          download="Pankaj-Panday-resume.pdf"
        >
          My resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
}

export default Header
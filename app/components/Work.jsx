import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="mywork"
      className="w-full scroll-mt-20 px-[12%] py-10"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="font-ovo mb-2 text-center text-lg"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="font-ovo text-center text-5xl"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="font-ovo mx-auto mt-5 mb-12 max-w-2xl text-center"
      >
        Welcome to my web development portfolio ! Explore a collection of
        projects showcasing my expertise in fullstack development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="my-10 grid grid-cols-(--grid-cols-auto) gap-5 dark:text-black"
      >
        {workData.map(({ title, description, bgImage, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="group relative aspect-square cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
            onClick={() => window.open(link, "_blank")} // Opens in new tab
          >
            <div className="absolute bottom-5 left-1/2 flex w-10/12 -translate-x-1/2 items-center justify-between gap-2 rounded-md bg-white px-5 py-3 duration-500 group-hover:bottom-7">
              <div>
                <h2 className="w-max font-semibold">{title}</h2>
                <p className="text-sm text-gray-700">{description}</p>
              </div>
              <div className="flex aspect-square w-9 shrink-0 items-center justify-center rounded-full border border-black shadow-[2px_2px_0_#000] transition group-hover:bg-lime-300">
                <Image src={assets.send_icon} alt="" className="w-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="https://github.com/Pankaj-Panday?tab=repositories"
        target="_blank"
        className="hover:bg-lightHover dark:hover:bg-darkHover mx-auto my-20 flex w-max items-center justify-center gap-2 rounded-full border-[0.5px] border-gray-700 px-10 py-3 text-gray-700 duration-500 dark:border-white dark:text-white"
      >
        Show More{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt=""
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
}

export default Work
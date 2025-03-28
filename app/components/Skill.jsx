import { assets, skillsData } from "@/assets/assets";
import Image from 'next/image';
import React from 'react'
import {motion} from "motion/react"

const Skill = ({isDarkMode}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skills"
      className="w-full scroll-mt-20 px-[12%] py-10"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="font-ovo mb-2 text-center text-lg"
      >
        What I do
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="font-ovo text-center text-5xl"
      >
        My Expertise
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="font-ovo mx-auto mt-5 mb-12 max-w-2xl text-center"
      >
        As a Full Stack Developer, I specialize in creating fast, responsive,
        and user-friendly web applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="my-10 grid grid-cols-(--grid-cols-auto) gap-6"
      >
        {skillsData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="hover:bg-lightHover dark:hover:bg-darkHover cursor-pointer rounded-lg border border-gray-400 px-8 py-12 duration-500 hover:-translate-y-1 hover:shadow-black dark:hover:shadow-white"
          >
            <Image src={icon} alt="title" className="w-10" />
            <h3 className="my-4 text-lg text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-60 text-sm leading-5 dark:text-white/80">
              {description}
            </p>
            {/* <a href={link} className="mt-5 flex items-center gap-2 text-sm">
              Read more{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a> */}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Skill
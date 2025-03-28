import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="mx-auto mb-2 w-36"
        />
      </div>
      <div className="mx-auto flex w-max items-center gap-2">
        <Image
          src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
          alt=""
          className="w-6"
        />
        ppanday064@gmail.com
      </div>

      <div className="mx-[10%] mt-12 items-center justify-between border-t border-gray-400 py-6 text-center sm:flex">
        <p>&copy; {new Date().getFullYear()} Pankaj. All right reserved.</p>
        <ul className="mt-4 flex items-center justify-center gap-10 sm:mt-0">
          <li>
            <a href="https://github.com/Pankaj-Panday" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/pankaj-panday/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://x.com/_pankaj_panday_" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <section className="sm:px-10 px-5 pt-7 pb-3 border-t border-black-200 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-200 flex gap-2">
          <img src="/favicon.ico" alt="my logo" className="w-6 h-6" />
          <p>|</p>
          <Link href='/terms-conditions'>
            <p className='text-center'>
              Terms & <span className='text-purple'>Conditions</span>
            </p>
          </Link>
          <p>|</p>
          <Link href='/privacy-policy'>
            <p className='text-center'>
              Privacy <span className='text-purple'>Policy</span>
            </p>
          </Link>
        </div>
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
            <a href="https://github.com/lonis752" target="_blank">
              <img src="/github-logo.png" alt="Github Logo from Freepik" className="" />
            </a>
          </div>
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
            <a href="https://x.com/lonis_k" target="_blank">
              <img src="/twitter.png" alt="X Logo from Freepik" className="" />
            </a>
          </div>
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
            <a href="https://www.linkedin.com/in/lonis-kwacke/" target="_blank">
              <img src="/linkedin.png" alt="LinkedIn Logo from Freepik" className="" />
            </a>
          </div>
        </div>
        <p className="text-white-200">{`© ${year}`} Spendable. All Rights <span className="text-purple">Reserved</span>.</p>
      </section>
    </>
  );
};

export default Footer;
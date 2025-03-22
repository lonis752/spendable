"use client";

import React, { useState } from 'react';
import { Button } from './ui/button';
import { motion } from "framer-motion";

const Hero = () => {
    const [visibleSection, setVisibleSection] = useState<string | null>(null);
    const toggleSection = (section: string) => {
      setVisibleSection(visibleSection === section ? null : section);
    };
  return (
    /* Hero slides in from the left */
    <motion.div
    initial={{ x: "-100vw", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }} className='mt-5'>
      <h1 className='text-center mt-5 text-2xl px-5'>
        Take charge of your spending with the Spendable app.
      </h1>
      <div className='mt-5 flex flex-col sm:flex-row gap-5 items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          {/* What is Spendable? */}
          <Button className='font-bold' onClick={() => toggleSection('what')}>
            What is Spendable?
          </Button>
          {visibleSection === 'what' && (
            <div className='flex flex-col items-center justify-center'>
              <p className='max-w-50 text-center'>
                Spendable helps you determine how many hours you need to work to
                afford something based on your hourly wage. It's a simple and
                effective way to see if a purchase is worth your time!
              </p>
            </div>
          )}
        </div>
        <div className='flex flex-col items-center justify-center'>
          {' '}
          {/* Why Use Spendable? */}
          <Button className='font-bold' onClick={() => toggleSection('why')}>
            Why Use Spendable?
          </Button>
          {visibleSection === 'why' && (
            <div className='flex flex-col justify-center gap-5 text-center'>
              <p className='font-semibold'>Quick & Simple</p>
              <p className='font-semibold'>Helps with Budgeting</p>
              <p className='font-semibold'>Make Smart Spending Choices</p>
            </div>
          )}
        </div>

        <div className='flex flex-col items-center justify-center'>
          {/* How It Works? */}
          <Button className='font-bold' onClick={() => toggleSection('how')}>
            How It Works?
          </Button>
          {visibleSection === 'how' && (
            <div className='flex flex-col justify-center gap-5 text-center'>
              <p className='font-semibold'>Step 1: Enter Your Hourly Wage</p>
              <p className='font-semibold'>
                Step 2: Enter the Price of What You Want to Buy
              </p>
              <p className='font-semibold'>
                Step 3: Get Your Work Hours Calculation
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

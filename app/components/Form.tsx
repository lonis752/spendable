'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';

const Form: React.FC = () => {
  const [wage, setWage] = useState<number>(0);
  const [purchase, setPurchase] = useState<number>(0);
  const [hours, setHours] = useState<string>('');

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (wage === purchase) {
        if (wage === 0 || purchase === 0) {
          return;
        } else {
          setHours('1 Hour');
        }
      } else if (wage > purchase) {
        const hrs: number = Math.round((purchase / wage) * 100) / 100;
        const mins: number = Math.round(60 * hrs);
        setHours(`${mins} Minutes`);
      } else if (wage < purchase) {
        const calc: number = purchase / wage;
        const hrs: number = Math.trunc(calc);
        const minsCalc: number = calc - Math.trunc(calc);
        const mins: number = Math.round(60 * minsCalc);
        if (mins === 0) {
          setHours(`${hrs} Hours`);
        } else {
          setHours(`${hrs} Hours & ${mins} Minutes`);
        }
        console.log(calc);
      }
    } catch (err) {
      console.error((err as Error).message);
    }
  };

  return (
    /* Form slides in from the right */
    <motion.div
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='flex flex-col gap-10 mt-10'
    >
      <form
        className='flex flex-col justify-center items-center gap-10'
        onSubmit={onSubmitForm}
      >
        <div className='flex justify-center items-center gap-5'>
          <div className='flex flex-col items-center gap-2'>
            <label className='text-xl sm:text-2xl' htmlFor='wage-input'>
              Hourly Wage $
            </label>
            <label className='text-xl sm:text-2xl' htmlFor='purchase-input'>
              Price $
            </label>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <Input
              name='wage-input'
              type='number'
              className='border-3 rounded-2xl border-green-600 text-end'
              value={wage}
              onChange={(e) => setWage(parseFloat(e.target.value))}
              onFocus={(e) => e.target.select()}
              required
            />
            <Input
              name='purchase-input'
              type='number'
              className='border-3 rounded-2xl border-red-600 text-end'
              value={purchase}
              onChange={(e) => setPurchase(parseFloat(e.target.value))}
              onFocus={(e) => e.target.select()}
              required
            />
          </div>
        </div>
        <Button
          className='font-bold text-xl bg-green-600 hover:p-4 hover:text-2xl hover:text-green-600 hover:bg-black'
          type='submit'
        >
          $pend
        </Button>
      </form>
      {hours ? (
        <div className='mt-10'>
          <p className='text-center text-xl'>
            How long you have worked to spend ${purchase}:
          </p>
          <p className='text-center font-semibold text-2xl mt-5'>{hours}</p>
        </div>
      ) : (
        <div className='flex items-center justify-center'>
          <p className='font-semibold text-2xl mt-5 flex items-center gap-2'>
            Click the Button
            <FaArrowAltCircleUp />
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default Form;

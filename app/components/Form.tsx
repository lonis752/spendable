'use client';

import { useState } from 'react';

const Form: React.FC = () => {
  const [wage, setWage] = useState<number>(30);
  const [purchase, setPurchase] = useState<number>(50);
  const [hours, setHours] = useState<string>('');

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (wage === purchase) {
        setHours('1');
      } else if (wage > purchase) {
        const hrs: number = Math.round((purchase / wage) * 100) / 100;
        const mins: number = Math.round(60 * hrs);
        setHours(`${mins} Minutes`);
      } else if (wage < purchase) {
        const calc: number = purchase / wage;
        const hrs: number = Math.trunc(calc);
        const minsCalc: number = calc - Math.trunc(calc);
        const mins: number = Math.round(60 * minsCalc);
        setHours(`${hrs} Hours & ${mins} Minutes`);
        console.log(calc)
      }
    } catch (err) {
      console.error((err as Error).message);
    }
  };

  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-center mt-5'>Spendable</h1>
      <form
        className='flex flex-col items-center gap-5'
        onSubmit={onSubmitForm}
      >
        <h3>Hourly Wage</h3>
        <div className='flex items-center'>
          <p>$</p>
          <input
            name='wage-input'
            type='number'
            className='border-3 rounded-2xl border-green-600 text-end'
            placeholder='0.00'
            value={wage}
            onChange={(e) => setWage(parseFloat(e.target.value))}
            required
          />
        </div>
        <h3>Spending</h3>
        <div className='flex items-center'>
          <p>$</p>
          <input
            name='purchase-input'
            type='number'
            className='border-3 rounded-2xl border-red-600 text-end'
            placeholder='0.00'
            value={purchase}
            onChange={(e) => setPurchase(parseFloat(e.target.value))}
            required
          />
        </div>
        <button
          className='border-3 rounded-2xl border-blue-600 bg-blue-600 text-white'
          type='submit'
        >
          Can I?
        </button>
      </form>
      <h1 className='text-center text-2xl'>{hours}</h1>
    </div>
  );
};

export default Form;

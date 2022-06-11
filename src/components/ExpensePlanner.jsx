import { useState } from 'react';

const ExpensePlanner = () => {
  const [budget, setBudget] = useState('');

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  return (
    <section className='w-screen h-40 lg:h-72 text-center text-white bg-sky-500'>
      <h1 className='font-bold text-xl lg:text-3xl uppercase py-3'>
        Planificador de gastos
      </h1>

      <div className='bg-white w-11/12 lg:w-2/4 lg:h-64 lg:mt-6 lg:flex lg:flex-col lg:justify-center mx-auto rounded border shadow'>
        <form>
          <div className='py-2 flex flex-col'>
            <label
              className='text-sky-400 lg:text-xl font-semibold'
              htmlFor='budget'
            >
              Definir presupuesto
            </label>
            <input
              name='budget'
              className='bg-gray-100 w-11/12 mx-auto rounded text-black text-center py-2 mt-2 px-5'
              type='number'
              value={budget}
              placeholder='Añade tu presupuesto'
              onChange={handleBudgetChange}
            />
          </div>

          <button
            type='submit'
            className='w-11/12 py-2 mb-5 mt-3 bg-sky-700 lg:hover:bg-sky-800 transition all ease-in mx-auto uppercase font-semibold'
          >
            Añadir
          </button>
        </form>
      </div>
    </section>
  );
};

export default ExpensePlanner;

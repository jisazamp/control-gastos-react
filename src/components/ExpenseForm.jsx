import { useState } from 'react';

const ExpenseForm = () => {
  const [expense, setExpense] = useState({
    name: '',
    quantity: '',
    filter: '',
  });

  const categories = ['Home', 'Food', 'Bills', 'Other'];

  const handleExpenseChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  return (
    <div className='z-[2000]'>
      <h1 className='text-2xl lg:text-4xl uppercase text-white font-bold text-center mt-14'>
        Nuevo gasto
      </h1>
      <hr className='border-none h-0.5 mt-2 w-3/4 mx-auto bg-sky-700' />

      <form>
        <div className='flex flex-col w-80 lg:w-1/3 mx-auto mt-4 space-y-3'>
          <label className='text-xl text-white font-semibold' htmlFor='name'>
            Nombre del gasto
          </label>
          <input
            className='py-2 px-2 rounded-md'
            name='name'
            type='text'
            placeholder='Mercado semanal'
            onChange={handleExpenseChange}
            value={expense['name']}
          />
        </div>

        <div className='flex flex-col w-80 lg:w-1/3 mx-auto mt-4 space-y-3'>
          <label
            className='text-xl text-white font-semibold'
            htmlFor='quantity'
          >
            Cantidad
          </label>
          <div className='space-x-3 flex items-center justify-around'>
            <input
              className='py-2 px-2 w-full rounded-md'
              name='quantity'
              type='number'
              placeholder='3000'
              onChange={handleExpenseChange}
              value={expense['quantity']}
            />
            <span className='text-sky-500 font-bold text-xl'>COP</span>
          </div>
        </div>

        <div className='flex flex-col w-80 lg:w-1/3 mx-auto mt-4 space-y-3'>
          <label className='text-xl text-white font-semibold' htmlFor='filter'>
            Filtrar gastos
          </label>

          <select
            className='py-2 px-2 rounded-md'
            name='filter'
            onChange={handleExpenseChange}
            value={expense['filter']}
          >
            <option value='' selected disabled hidden>
              -- Escoge una opción --
            </option>
            {categories.map((c) => (
              <option key={c} value={c.toLowerCase()}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className='flex flex-col mt-6 items-center'>
          <button
            type='submit'
            className='bg-sky-800 py-2 rounded-md text-white uppercase font-bold w-[90%] max-w-xl lg:hover:bg-sky-900 transition-all duration-200 ease-in'
          >
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;

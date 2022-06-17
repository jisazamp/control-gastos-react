import { useState, useEffect } from 'react';
import Alert from './common/Alert';
import { generateId } from '../helpers/index';

const ExpenseForm = ({
  animateModal,
  expenses,
  setExpenses,
  setModal,
  setAnimateModal,
  expenseEdit,
  setEditExpense,
}) => {
  const [expense, setExpense] = useState({
    name: '',
    quantity: '',
    filter: '',
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      setExpense(expenseEdit);
    }
  }, [expenseEdit]);

  const categories = [
    'Ahorro',
    'Casa',
    'Comida',
    'Gastos',
    'Ocio',
    'Salud',
    'Suscripciones',
  ];

  const handleExpenseChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleExpenseSubmit = (e) => {
    e.preventDefault();

    if ([expense.name, expense.quantity, expense.filter].includes('')) {
      setMessage('Todos los campos son obligatorios');
      return;
    }

    // Check if its editing
    if (Object.keys(expenseEdit).length > 0) {
      // Check if item exists
      const itemExist = expenses.find((e) => e.id === expenseEdit.id);
      if (itemExist) {
        const newExpenses = expenses.map((e) =>
          expenseEdit.id === e.id ? expense : e
        );
        setExpenses(newExpenses);
        setTimeout(() => {
          setModal(false);
          setMessage('');
          setAnimateModal(false);
          setEditExpense({});
        }, 100);
      }

      return;
    }

    let expenseObject = { id: generateId(), date: Date.now(), ...expense };

    setTimeout(() => {
      setModal(false);
      setMessage('');
      setAnimateModal(false);
      setEditExpense({});
      setExpenses([...expenses, expenseObject]);
    }, 100);
    return;
  };

  return (
    <div className='z-[1000]'>
      <form
        className={`form ${animateModal && 'form-fade'}`}
        onSubmit={handleExpenseSubmit}
      >
        <legend className='text-2xl mx-auto lg:text-4xl uppercase text-white font-bold text-center mt-14'>
          {Object.keys(expenseEdit).length > 0 ? 'Editar gasto' : 'Nuevo gasto'}
        </legend>
        <hr className='border-none h-0.5 mt-2 w-3/4 mx-auto bg-sky-700' />
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
            className='py-2 px-2 rounded-md text-center'
            name='filter'
            onChange={handleExpenseChange}
            value={expense['filter']}
          >
            <option value='' defaultValue disabled hidden>
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
            {Object.keys(expenseEdit).length > 0 ? 'Editar' : 'Añadir'}
          </button>
        </div>

        <div className='mx-auto max-w-xl text-center'>
          {message && <Alert msg={message} />}
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;

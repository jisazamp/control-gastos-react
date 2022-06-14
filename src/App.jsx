import { useState } from 'react';
import ExpensePlanner from './components/ExpensePlanner';
import Expenses from './components/Expenses';
import Modal from './components/common/Modal';
import UserExpensesList from './components/UserExpensesList';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleNewExpense = () => {
    setModal(true);
    setTimeout(() => setAnimateModal(true), 60);
  };

  return (
    <main className='container'>
      {isValidBudget ? (
        <Expenses budget={budget} />
      ) : (
        <ExpensePlanner
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}

      {isValidBudget && (
        <div
          className='fixed h-16 w-16 active:h-20 active:w-20 bottom-2 right-3 lg:bottom-8 lg:right-8 fill-sky-400 lg:cursor-pointer lg:hover:h-20 lg:hover:w-20
      transition-all duration-200 ease-in stroke-white md:cursor-pointer'
          onClick={handleNewExpense}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </div>
      )}

      {modal && (
        <Modal
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          setModal={setModal}
          expenses={expenses}
          setExpenses={setExpenses}
        />
      )}

      <div className='w-screen flex flex-col items-center'>
        <UserExpensesList expenses={expenses} />
      </div>
    </main>
  );
};

export default App;

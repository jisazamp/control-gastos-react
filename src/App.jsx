import { useState } from 'react';
import ExpensePlanner from './components/ExpensePlanner';
import Expenses from './components/Expenses';
import Modal from './components/common/Modal';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true);
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
          className='fixed h-16 w-16 active:h-20 active:w-20 bottom-4 right-4 lg:bottom-8 lg:right-8 fill-sky-400 lg:cursor-pointer lg:hover:h-20 lg:hover:w-20
      transition-all duration-200 ease-in stroke-white'
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

      {modal && <Modal setModal={setModal} />}
    </main>
  );
};

export default App;

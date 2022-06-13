import ExpenseForm from '../ExpenseForm';

const Modal = ({ expenses, setModal, setExpenses }) => {
  return (
    <div className='modal transition-all duration-300 ease-in'>
      {/* Close button */}
      <div
        onClick={() => setModal(false)}
        className='fixed h-10 w-10 right-4 top-4 stroke-white cursor-pointer'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          strokeWidth={3}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </div>

      {/* Form */}
      <ExpenseForm
        expenses={expenses}
        setExpenses={setExpenses}
        setModal={setModal}
      />
    </div>
  );
};

export default Modal;

import ExpenseForm from '../ExpenseForm';

const Modal = ({
  animateModal,
  setAnimateModal,
  expenses,
  setModal,
  setExpenses,
}) => {
  const handleModalClose = () => {
    setTimeout(() => setModal(false), 500);
    setAnimateModal(false);
  };

  return (
    <div className='modal transition-all duration-300 ease-in'>
      {/* Close button */}
      <div
        onClick={handleModalClose}
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
        animateModal={animateModal}
        expenses={expenses}
        setExpenses={setExpenses}
        setModal={setModal}
        setAnimateModal={setAnimateModal}
      />
    </div>
  );
};

export default Modal;

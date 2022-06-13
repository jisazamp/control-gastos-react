import ExpenseForm from '../ExpenseForm';

const Modal = ({ setModal }) => {
  return (
    <div className='modal transition-all duration-300 ease-in'>
      {/* Close button */}
      <div
        onClick={() => setModal(false)}
        className='fixed h-10 w-10 right-4 top-4 stroke-white'
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
      <ExpenseForm />
    </div>
  );
};

export default Modal;

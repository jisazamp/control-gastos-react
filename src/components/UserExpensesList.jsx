import UserExpense from './UserExpense';

const UserExpensesList = ({ expenses }) => {
  return (
    <div className='card mt-[16rem] max-w-[80rem] mb-20'>
      {Object.keys(expenses).length > 0 ? (
        <h2 className='text-xl text-sky-900 font-bold'>Gastos</h2>
      ) : (
        <h2 className='text-xl text-sky-900 font-bold'>No hay gastos aún</h2>
      )}

      {Object.keys(expenses).length > 0 &&
        expenses.map((e) => <UserExpense key={e.id} expense={e} />)}
    </div>
  );
};

export default UserExpensesList;

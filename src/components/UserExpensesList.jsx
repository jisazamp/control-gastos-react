import UserExpense from './UserExpense';

const UserExpensesList = ({ expenses, onExpenseDelete, onExpenseEdit }) => {
  return (
    <div className='card mt-[16rem] max-w-[80rem] mx-auto mb-20'>
      {Object.keys(expenses).length > 0 ? (
        <h2 className='text-xl text-sky-900 font-bold'>Gastos</h2>
      ) : (
        <h2 className='text-xl text-sky-900 font-bold'>No hay gastos aún</h2>
      )}

      {Object.keys(expenses).length > 0 &&
        expenses.map((e) => (
          <UserExpense
            key={e.id}
            expense={e}
            onExpenseDelete={onExpenseDelete}
            onExpenseEdit={onExpenseEdit}
          />
        ))}
    </div>
  );
};

export default UserExpensesList;

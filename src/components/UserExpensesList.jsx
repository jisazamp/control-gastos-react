import UserExpense from './UserExpense';

const UserExpensesList = ({ expenses }) => {
  return (
    <div className='card mt-[16rem] max-w-4xl'>
      {expenses.map((e) => (
        <UserExpense key={e.name} expense={e} />
      ))}
    </div>
  );
};

export default UserExpensesList;

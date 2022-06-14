const UserExpense = ({ expense }) => {
  return (
    <article className='bg-sky-100 rounded-md shadow-md py-3 px-6 w-[20rem] lg:w-[40rem]'>
      {expense.name}
    </article>
  );
};

export default UserExpense;

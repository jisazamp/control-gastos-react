import food from '../img/food.svg';

const UserExpense = ({ expense }) => {
  return (
    <article className='flex items-center justify-between bg-white border border-gray-300 mt-3 mb-3 rounded-md shadow-md py-3 px-6 w-[21rem] md:w-[26rem] lg:w-[40rem]'>
      <div>
        <img className='h-10 w-10' src={food} />
      </div>
      <div>
        <p>Nombre: Hola</p>
        <p>Valor: 3000</p>
      </div>
    </article>
  );
};

export default UserExpense;

const Expenses = ({ budget }) => {
  const formatCurrency = (value) => {
    return value.toLocaleString('es-es', {
      style: 'currency',
      currency: 'COP',
    });
  };

  return (
    <section className='w-screen h-40 lg:h-72 text-center text-white bg-sky-500'>
      <h1 className='font-bold text-xl lg:text-3xl uppercase py-3'>
        Resumen de gastos
      </h1>

      <div className='bg-white   text-black py-4 space-y-4 w-11/12 xl:w-2/4 xl:h-64 xl:mt-6 flex flex-col xl:flex-row xl:justify-between xl:items-center xl:px-6 mx-auto rounded border shadow'>
        <div className='xl:w-1/2 flex flex-col xl:flex-row justify-center items-center'>
          <div className='border-[1rem] xl:text-xl border-gray-100 w-40 h-40 xl:w-52 xl:h-52 rounded-full mx-auto xl:m-0 text-sky-500 flex justify-center items-center'>
            0.00% gastado
          </div>
        </div>
        <div className='flex flex-col xl:w-8/12 items-center'>
          <button className='bg-fuchsia-600 lg:hover:bg-fuchsia-700 lg:transition-all lg:ease-in lg:duration-300 py-2 mt-3 w-11/12 max-w-md xl:w-full text-white uppercase font-bold rounded'>
            Resetear App
          </button>
          <div className='w-full max-w-md text-left xl:text-lg mt-3 px-4 sm:px-0'>
            <p>
              <span className='text-sky-700 font-bold'>Presupuesto:</span>{' '}
              {formatCurrency(budget)}
            </p>
            <p>
              <span className='text-sky-700 font-bold'>Disponible:</span>{' '}
              {formatCurrency(0)}
            </p>
            <p>
              <span className='text-sky-700 font-bold'>Gastado:</span>{' '}
              {formatCurrency(0)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expenses;

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import FoodIcon from '../img/icono_comida.svg';
import SavingsIcon from '../img/icono_ahorro.svg';
import HouseIcon from '../img/icono_casa.svg';
import ExpensesIcon from '../img/icono_gastos.svg';
import EntertaimentIcon from '../img/icono_ocio.svg';
import HealthIcon from '../img/icono_salud.svg';
import SuscriptionsIcon from '../img/icono_suscripciones.svg';

const UserExpense = ({ expense, onExpenseDelete, onExpenseEdit }) => {
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => onExpenseEdit(expense)}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => onExpenseDelete(expense)}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  const imagesDictionary = {
    comida: FoodIcon,
    ahorro: SavingsIcon,
    casa: HouseIcon,
    gastos: ExpensesIcon,
    ocio: EntertaimentIcon,
    salud: HealthIcon,
    suscripciones: SuscriptionsIcon,
  };

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <article className='flex items-center justify-around bg-white border border-gray-300 mt-3 mb-3 rounded-md shadow-md py-3 h-32 space-x-4 w-[21rem] md:w-[26rem] lg:w-[40rem]'>
          {/* Icon */}
          <div>
            <img
              className='h-16 w-16 lg:h-20 lg:w-20'
              src={imagesDictionary[expense.filter]}
            />
          </div>
          {/* Info */}
          <div>
            <p>{expense.name}</p>
            <p>
              <span className='hidden md:inline'>Agregado el: </span>
              {new Date(expense.date).toLocaleDateString('es-co')}
            </p>
          </div>
          {/* Value */}
          <div>
            <p className='font-bold'>
              {Number(expense.quantity).toLocaleString('es-co', {
                style: 'currency',
                currency: 'COP',
              })}
            </p>
          </div>
        </article>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default UserExpense;

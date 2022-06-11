import { useState } from 'react';
import ExpensePlanner from './components/ExpensePlanner';
import Expenses from './components/Expenses';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  return (
    <main className='container'>
      {isValidBudget ? (
        <Expenses budget={budget} />
      ) : (
        <ExpensePlanner
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </main>
  );
};

export default App;

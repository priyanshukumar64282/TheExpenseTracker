import { useState } from 'react';

import Expenses from './components/expensesDetail/Expenses';
import NewExpenses from './components/newExpenses/NewExpenses';

const Dummy_Expense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 7, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];


function App() {
  const [expenses, setExpenses]= useState(Dummy_Expense);
  const addExpenseHandler =(expenseData)=>{
    setExpenses((prevExpenses)=>{
        return [expenseData,...prevExpenses];
    })
  };

  return (
    <div>
      <NewExpenses addExpenseData={addExpenseHandler}/>
      <Expenses  items={expenses}/>
    </div> 
  );
}

export default App;

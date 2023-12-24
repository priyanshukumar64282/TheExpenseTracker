import  React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../newExpenses/ExpenseFilter";
import ExpenseChart from './ExpenseChart';
import ExpensesList from './ExpensesList';
import Card from "./Card";
import './Expenses.css';

function Expenses(props){
  const  [filteredYear, setFilteredYear]= useState('2020');

  const filteredChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
  }; 

  const filteredExpenses = props.items.filter((expenses)=>{
    return expenses.date.getFullYear().toString()=== filteredYear;
  });

  return(
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear}  onChangeFilter={filteredChangeHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}


export default Expenses;
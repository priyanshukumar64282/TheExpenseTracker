import { useState } from 'react';
import ExpensesForm from './ExpensesForm';
import './NewExpenses.css';

function NewExpenses(props){

    const [isEditing, setIsEditing]= useState(false);
    const saveExpenseHandler=(expensesData) =>{
        const expenseData={
            ...expensesData,
            id : Math.random().toString()
        }
        // console.log(expenseData);
        props.addExpenseData(expenseData);
        setIsEditing(false);
    };

    const startEditinghandler=()=>{
        setIsEditing(true);
    };

    const stopEditingHandler =()=>{
        setIsEditing(false);
    };
   return(
    <div className="new-expense">
        {!isEditing && (
            <button onClick={startEditinghandler}>Add New Expense</button>
        )}
        {isEditing && (
            <ExpensesForm onSaveExpenseData= {saveExpenseHandler}  onCancle={stopEditingHandler}/>
        )}
        
    </div>
   );
}

export default NewExpenses;
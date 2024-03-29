import {useState} from 'react';

import './ExpensesForm.css'

const ExpensesForm = (props) => {
    const [enteredtitle, setenteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');
    // const [userInput , setUserInput]= useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''

    // });

    const titleChangeHandler=(event)=>{
        setenteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // setUserInput((prevState) =>{
        //     return{...prevState,enteredTitle:event.target.value};
        // });
    };

    const amountChangeHandler = (event) =>{
        setenteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    };

    const dateChangeHandler = (event)=>{
        setenteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    };

    // const wholeHandler = (identifire ,value) => {
    //     if (identifire == 'title') {
    //         setenteredTitle(value);
    //     }
        
    //     else {
    //         setenteredAmount(value);
    //     }
    // };


    const submitHandler = (event)=> {
        event.preventDefault();

        const expenseData ={
            title: enteredtitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('');
    };
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredtitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type="number" value={enteredAmount} min="0.01"  step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label >Date</label>
                    <input type="date" value={enteredDate}  min="2019-01-01"  max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions" >
                <button type='button' onClick={props.onCancle}>Cancle</button>
                
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}


export default ExpensesForm;
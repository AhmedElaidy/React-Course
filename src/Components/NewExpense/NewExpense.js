import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

const NewExpense = ({addingExpensesHandler}) => {
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
           }
           addingExpensesHandler(expenseData);
    }
  return (
    <div className='new-expense'>
    <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense
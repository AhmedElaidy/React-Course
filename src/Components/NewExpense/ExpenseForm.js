import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({onSaveExpenseData}) => {
  const [form, setForm] = useState({ title: "", amount: "", date: "" });

  const changeHandler = (e) => {
    setForm((prevstate) => {
        return { ...prevstate, [e.target.name]: e.target.value };
    });
};
    
    const submitHandler = (e) => {
      e.preventDefault();
      const expenseData = {
        title: form.title,
        amount: form.amount,
        date: new Date(form.date),
      };
      onSaveExpenseData(expenseData);
      setForm({title: "", amount: "", date: "" })
    };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={form.title}
            name="title"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={form.amount}
            name="amount"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={form.date}
            name="date"
            onChange={(e) => changeHandler(e)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

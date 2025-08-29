import React from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  return (
    <div className="expense-form-container">
      <h2>Add New Expense</h2>
      <form>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" name="amount" />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;

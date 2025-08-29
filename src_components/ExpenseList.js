import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const expenses = [
    { id: 1, description: 'Groceries', amount: 75.50 },
    { id: 2, description: 'Gas', amount: 45.00 }
  ];

  return (
    <div className="expense-list-container">
      <h2>Expense History</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.description}: ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;

import React from 'react';
import './App.css';
import Header from './src_components/Header';
import ExpenseList from './src_components/ExpenseList';
import ExpenseForm from './src_components/ExpenseForm';
import Receipt from './src_components/Receipt';

function App() {
  return (
    <div className="App">
      <Header />
      <ExpenseForm />
      <ExpenseList />
      <Receipt />
    </div>
  );
}

export default App;

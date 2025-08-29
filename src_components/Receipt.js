import React from 'react';
import './Receipt.css';

function Receipt() {
  const receiptInfo = {
    transactionId: 'TXN12345',
    date: '2023-10-27',
    amount: 120.75,
    items: ['Shirt', 'Pants']
  };

  return (
    <div className="receipt-container">
      <h2>Receipt</h2>
      <p>Transaction ID: {receiptInfo.transactionId}</p>
      <p>Date: {receiptInfo.date}</p>
      <p>Total: ${receiptInfo.amount}</p>
      <p>Items: {receiptInfo.items.join(', ')}</p>
    </div>
  );
}

export default Receipt;

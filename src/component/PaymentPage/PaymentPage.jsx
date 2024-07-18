/*import React, { useState } from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');

  const handlePayment = (event) => {
    event.preventDefault();
    // Here you would typically send payment details to a server or handle it with a payment gateway
    console.log('Processing payment...');
    alert('Payment processed successfully!');
  };

  return (
    <div className="PaymentPage">
      <h2>Payment Page</h2>
      <form onSubmit={handlePayment}>
        <label>
          Card Number : 
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Expiry Date:
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          CVC:
          <input
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Name on Card:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentPage;*/

import React, { useState } from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit_card'); // Default to credit card
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [upiId, setUpiId] = useState('');
  const [bankAccount, setBankAccount] = useState('');

  const handlePayment = (event) => {
    event.preventDefault();
    // Here you would typically send payment details to a server or handle it with a payment gateway
    console.log('Processing payment for:', paymentMethod);
    alert('Payment processed successfully!');
  };

  const renderPaymentFields = () => {
    switch (paymentMethod) {
      case 'credit_card':
      case 'debit_card':
        return (
          <>
            <div className="payment-details">
              <label>
                Card Number:
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Expiry Date:
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                CVC:
                <input
                  type="text"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Name on Card:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <br />
            </div>
          </>
        );
      case 'upi':
        return (
          <>
            <div className="payment-details">
              <label>
                UPI ID:
                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  required
                />
              </label>
              <br />
            </div>
          </>
        );
      case 'internet_banking':
        return (
          <>
            <div className="payment-details">
              <label>
                Bank Account Number:
                <input
                  type="text"
                  value={bankAccount}
                  onChange={(e) => setBankAccount(e.target.value)}
                  required
                />
              </label>
              <br />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="PaymentPage">
      <h2>Payment Page</h2>
      <div className="payment-container">
        <div className="payment-options">
          <label>
            <input
              type="radio"
              value="credit_card"
              checked={paymentMethod === 'credit_card'}
              onChange={() => setPaymentMethod('credit_card')}
            />
            Credit Card
          </label>
          <label>
            <input
              type="radio"
              value="debit_card"
              checked={paymentMethod === 'debit_card'}
              onChange={() => setPaymentMethod('debit_card')}
            />
            Debit Card
          </label>
          <label>
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={() => setPaymentMethod('upi')}
            />
            UPI
          </label>
          <label>
            <input
              type="radio"
              value="internet_banking"
              checked={paymentMethod === 'internet_banking'}
              onChange={() => setPaymentMethod('internet_banking')}
            />
            Internet Banking
          </label>
        </div>
        <div className="payment-details-container">
          <form onSubmit={handlePayment} className="payment-form">
            {renderPaymentFields()}
            <button type="submit">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

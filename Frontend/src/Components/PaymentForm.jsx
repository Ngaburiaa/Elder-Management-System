
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './PaymentForm.css';

function PaymentForm({ onClose, serviceKey, price }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState(price);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post(
        'http://localhost:3000/api/initiate-payment',
        { phoneNumber, amount, service: serviceKey },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setMessage('Payment initiated. Please check your phone for the STK push.');
      console.log(`Payment response for ${serviceKey}:`, response.data);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error(`Payment error for ${serviceKey}:`, error);
    }

    setLoading(false);
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="payment-form-overlay" ref={formRef}>
      <h3>Make a Payment for {serviceKey}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor={`phoneNumber-${serviceKey}`}>Phone Number:</label>
          <input
            type="text"
            id={`phoneNumber-${serviceKey}`}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="e.g., 254712345678"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor={`amount-${serviceKey}`}>Amount (KES):</label>
          <input
            type="number"
            id={`amount-${serviceKey}`}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            readOnly
            className="immutable-input"
          />
        </div>
        <div className="payment-buttons">
          <button 
            type="submit" 
            disabled={loading}
            className="pay-btn"
          >
            {loading ? 'Processing...' : 'Pay with M-PESA'}
          </button>
          <button 
            type="button" 
            onClick={onClose} 
            className="close-btn"
          >
            Close
          </button>
        </div>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default PaymentForm;
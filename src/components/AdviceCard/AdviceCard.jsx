import React, { useState, useEffect } from 'react';
import './AdviceCard.css';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';

function AdviceCard() {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAdvice = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (error) {
      console.error("Failed to fetch advice", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice(); 
  }, []);

  return (
    <div className="advice-card">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <p className="advice-id">ADVICE #{adviceId}</p>
          <p className="advice-text">"{advice}"</p>
          <div className="divider">
            <hr />
            <span className="divider-icon">||</span>
            <hr />
          </div>
          <Button onClick={fetchAdvice} />
        </>
      )}
    </div>
  );
}

export default AdviceCard;
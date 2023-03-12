import React from 'react';

export default function Translation({ doStuff, setInput, result }) {
  return (
    <div>
      <textarea className="text-area" cols={80} rows={20} onChange={(e) => setInput(e.target.value)}></textarea>
      <button className='action-btn' onClick={doStuff} >
        Enlighten me!
      </button>
      <h3 className='result-text'>{result}</h3>
    </div>
  );
}

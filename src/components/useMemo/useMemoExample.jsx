import React, { useState, useMemo } from 'react';

// Expensive computation function
const calculateExpensiveValue = (num) => {
  let result = 0;
  // Simulating an expensive computation
  for (let i = 0; i < num * 1000; i++) {
    result += i;
  }
  return result;
};

function UseMemoExample() {
  // State variables
  const [number, setNumber] = useState(1);
  const [isDark, setIsDark] = useState(false);

  // Memoized expensive calculation
  const expensiveCalculation = useMemo(() => {
    console.log('🔍 Calculating...');
    return calculateExpensiveValue(number);
  }, [number]); // Only recalculate if number changes

  // Object creation memoization
  const user = useMemo(() => {
    console.log('user fuction Memo');
    return {
      name: `User ${number}`,
      id: number
    };
  }, [number]);

  // Memoized filtered list
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const filteredNumbers = useMemo(() => {
    console.log('Filtering numbers Array...');
    return numbers.filter(n => n > number);
  }, [number]);

  // Theme styling based on dark mode
  const themeStyles = useMemo(() => {
    console.log('themeStyles fuction Memo');
    return {
      backgroundColor: isDark ? 'black' : 'white',
      color: isDark ? 'white' : 'black',
      padding: '20px',
      margin: '10px'
    };
  }, [isDark]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">useMemo Example</h1>
      
      <div className="mb-4">
        <input 
          type="number" 
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          className="border p-2 w-full"
          placeholder="Enter a number"
        />
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">Expensive Calculation Result:</h2>
        <p>{expensiveCalculation}</p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">User Object:</h2>
        <p>Name: {user.name}, ID: {user.id}</p>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold">Filtered Numbers:</h2>
        <p>{filteredNumbers.join(', ')}</p>
      </div>

      <div 
        style={themeStyles}
        className="mb-4"
      >
        <h2 className="font-semibold">Theme Example</h2>
        <p>This div's style depends on dark mode</p>
      </div>

      <div className="space-x-4">
        <button 
          onClick={() => setIsDark(prev => !prev)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Toggle Dark Mode
        </button>
      </div>
    </div>
  );
}

export default UseMemoExample;
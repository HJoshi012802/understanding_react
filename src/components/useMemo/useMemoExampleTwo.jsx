// import React, { useState, useMemo } from 'react';

// function UseMemoExampleTwo() {
//   // Two counter states
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
  
//   // Theme state
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   // Expensive computation function
//   const expensiveComputation = (num) => {
//     console.log('🚀 Expensive Computation Running');
//     let result = 0;
//     // Simulate a heavy computation
//     for (let i = 0; i < num * 100000000; i++) {
//       result += i;
//     }
//     return result;
//   };

//   // Memoized expensive computation
//   const expensiveValue = useMemo(() => {
//     return expensiveComputation(count1);
//   }, [count1]); // Only recompute when count1 changes

//   // Toggle theme handler
//   const toggleTheme = () => {
//     setIsDarkTheme(prev => !prev);
//   };

//   // Increment first counter
//   const incrementCount1 = () => {
//     setCount1(prev => prev + 1);
//   };

//   // Increment second counter
//   const incrementCount2 = () => {
//     setCount2(prev => prev + 1);
//   };

//   // Dynamic styling based on theme
//   const themeStyles = useMemo(() => ({
//     backgroundColor: isDarkTheme ? '#333' : '#fff',
//     color: isDarkTheme ? '#fff' : '#333',
//     padding: '20px',
//     transition: 'all 0.3s ease'
//   }), [isDarkTheme]);

//   return (
//     <div style={themeStyles} className="p-6 max-w-md mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Optimized Performance Demonstration</h1>
      
//       <div className="space-y-4">
//         <div className="bg-gray-100 p-4 rounded-lg">
//           <h2 className="font-semibold">Counter 1</h2>
//           <p>Count: {count1}</p>
//           <button 
//             onClick={incrementCount1}
//             className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
//           >
//             Increment Counter 1
//           </button>
//         </div>

//         <div className="bg-gray-100 p-4 rounded-lg">
//           <h2 className="font-semibold">Counter 2</h2>
//           <p>Count: {count2}</p>
//           <button 
//             onClick={incrementCount2}
//             className="bg-green-500 text-white px-4 py-2 rounded mt-2"
//           >
//             Increment Counter 2
//           </button>
//         </div>

//         <div className="bg-gray-100 p-4 rounded-lg">
//           <h2 className="font-semibold">Expensive Computation</h2>
//           <p>Expensive Value for Counter 1: {expensiveValue}</p>
//         </div>

//         <div className="bg-gray-100 p-4 rounded-lg">
//           <h2 className="font-semibold">Theme</h2>
//           <p>Current Theme: {isDarkTheme ? 'Dark' : 'Light'}</p>
//           <button 
//             onClick={toggleTheme}
//             className="bg-purple-500 text-white px-4 py-2 rounded mt-2"
//           >
//             Toggle Theme
//           </button>
//         </div>
//       </div>

//       <div className="mt-6 bg-green-100 p-4 rounded-lg">
//         <h3 className="font-bold mb-2">Performance Optimization</h3>
//         <ul className="list-disc pl-5">
//           <li>Expensive computation runs ONLY when count1 changes</li>
//           <li>Changing theme or second counter will NOT trigger expensive computation</li>
//           <li>Significant performance improvement</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default UseMemoExampleTwo;

import React, { useState } from 'react';

function UseMemoExampleTwo() {
  // Two counter states
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  
  // Theme state
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Expensive computation function
  const expensiveComputation = (num) => {
    console.log('🚀 Expensive Computation Running');
    let result = 0;
    // Simulate a heavy computation
    for (let i = 0; i < num * 100000000; i++) {
      result += i;
    }
    return result;
  };

  // Compute the expensive value each render
  const expensiveValue = expensiveComputation(count1);

  // Toggle theme handler
  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  // Increment first counter
  const incrementCount1 = () => {
    setCount1(prev => prev + 1);
  };

  // Increment second counter
  const incrementCount2 = () => {
    setCount2(prev => prev + 1);
  };

  // Dynamic styling based on theme
  const themeStyles = {
    backgroundColor: isDarkTheme ? '#333' : '#fff',
    color: isDarkTheme ? '#fff' : '#333',
    padding: '20px',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={themeStyles} className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Performance Demonstration</h1>
      
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold">Counter 1</h2>
          <p>Count: {count1}</p>
          <button 
            onClick={incrementCount1}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Increment Counter 1
          </button>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold">Counter 2</h2>
          <p>Count: {count2}</p>
          <button 
            onClick={incrementCount2}
            className="bg-green-500 text-white px-4 py-2 rounded mt-2"
          >
            Increment Counter 2
          </button>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold">Expensive Computation</h2>
          <p>Expensive Value for Counter 1: {expensiveValue}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold">Theme</h2>
          <p>Current Theme: {isDarkTheme ? 'Dark' : 'Light'}</p>
          <button 
            onClick={toggleTheme}
            className="bg-purple-500 text-white px-4 py-2 rounded mt-2"
          >
            Toggle Theme
          </button>
        </div>
      </div>

      <div className="mt-6 bg-yellow-100 p-4 rounded-lg">
        <h3 className="font-bold mb-2">Performance Observation</h3>
        <ul className="list-disc pl-5">
          <li>Expensive computation runs on EVERY render</li>
          <li>Changing theme or second counter will still trigger expensive computation</li>
          <li>This is inefficient and can cause performance issues</li>
        </ul>
      </div>
    </div>
  );
}

export default UseMemoExampleTwo;
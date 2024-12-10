import { useState, useCallback } from 'react';
import  Search  from './Search.jsx';
import SearchTwo from './SearchTwo.jsx';
import shuffle from "../../utils/shuffle.js";

const allUsers = [
  'john',
  'alex', 
  'george', 
  'simon', 
  'james'
];

function ParentComponentForCallback() {
  const [users, setUsers] = useState(allUsers);
  const [usersone, setUsersOne] = useState(allUsers);

  // Using useCallback to memoize the handleSearch function
  const handleSearch = useCallback((text) =>{
    console.log("Search 1 "+users[0]);
    const filteredUsers = allUsers.filter((user)=>
      user.includes(text),
    )
    setUsers(filteredUsers);
 
  },[users])

  const handleSearchOne = useCallback((text) =>{
    console.log("Search 2 "+usersone[0]);
    const filteredUsers = allUsers.filter((user)=>
      user.includes(text),
    )
    setUsersOne(filteredUsers);
  },[usersone])

  // Handler for shuffling users
  const handleShuffle = (() => {
    setUsers(shuffle(allUsers));
  });

  return (
    <div className="pt-[100px] bg-slate-400">
      <h1 className="text-3xl font-bold text-center mb-6">
        Understanding useCallback in React
      </h1>
      <button 
        onClick={handleShuffle} 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Shuffle Users
      </button>
      <Search onChange={handleSearch}/> 
      <SearchTwo onChange={handleSearchOne}/> 
      <ul>
        {users.map((user) => (
          <li key={user} className="py-1">{user}</li>
        ))}
      </ul>
      <ul>
        {usersone.map((user) => (
          <li key={user} className="py-1">{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default ParentComponentForCallback;
import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import './App.css';
import UsersList from './components/Users/UsersList';

const App = () => {
  // 😎 usersList represents the current state which is, //
  // an empty array, while setUsersList repr, //
  // the array in which we will use to update the state //
  // A call back function is needed to for the two components to, //
  // communicate //
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUserList => {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }
  
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  )
};


export default App;
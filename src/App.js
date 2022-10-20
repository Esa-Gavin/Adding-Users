import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import './App.css';
import UsersList from './components/Users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, {name: uName, age: uAge}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={[usersList]} />
    </div>
  )
};


export default App;
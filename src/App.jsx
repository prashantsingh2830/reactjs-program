import React, { useState } from 'react';
import './style.css';

function App() {
  const userArray = [
    { id: '1', name: 'prashant' },
    { id: '2', name: 'mayank' },
  ];
  const [user, setUser] = useState(userArray);

  const Delitem = (uid) =>{
    setUser(user.filter((item)=> item.id !== uid));  
  };

  
  return (
    <>

      <ol>
        {user.map((data) => <li> {data.name}
        <button onClick= { ()  => Delitem(data.id) } >Delete</button>
        
        </li> )}
      </ol>
    </>
  );
}

export default App;

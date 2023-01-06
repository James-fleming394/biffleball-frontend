import './App.css';
import Navbar from './components/Navbar';
import { CheckSession } from './services/auth.js';
// import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  };

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Navbar
        authenticated={authenticated}
        user={user}
        handleLogout={handleLogout}
      />
      
    </div>
  );
}

export default App;
